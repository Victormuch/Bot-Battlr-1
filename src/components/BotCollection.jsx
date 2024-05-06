import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Victormuch/Bot-Battlr-1/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }

  function handleRelease(bot) {
    const updatedBots = enlistedBots.filter(
      (enlistedBot) => enlistedBot.id !== bot.id
    );
    setEnlistedBots(updatedBots);
  }

  function handleDischarge(bot) {
    fetch(
      `https://my-json-server.typicode.com/Victormuch/Bot-Battlr-1/bots/${bot.id}`,
      {
        method: "DELETE",
      }
    );
  }

  function handleSort1(e) {
    const selectedSort = e.target.value;
    let sortedBots = [...bots];

    if (selectedSort === "health") {
      sortedBots.sort((a, b) => b.health - a.health);
    } else if (selectedSort === "damage") {
      sortedBots.sort((a, b) => b.damage - a.damage);
    } else if (selectedSort === "armor") {
      sortedBots.sort((a, b) => b.armor - a.armor);
    }

    setBots(sortedBots);
  }

  const handleFilterChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedFilters(selectedOptions);

    let filteredBots = [...bots];
    filteredBots = filteredBots.filter((bot) =>
      selectedOptions.includes(bot.bot_class)
    );
    setBots(filteredBots);
  };

  return (
    <div className="bot-container">
      <SortBar onSort1={handleSort1} onFilterData={handleFilterChange} />
      <YourBotArmy
        enlistedBots={enlistedBots}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <div className="card-container">
        {bots.map((bot) => (
          <div key={bot.id} className="card" onClick={() => enlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p className="catchphrase">{bot.catchphrase}</p>
            <button className="button">Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
