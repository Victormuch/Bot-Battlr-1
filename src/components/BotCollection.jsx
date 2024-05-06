import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
function BotCollection() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

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
      `https://my-json-server.typicode.com/Victormuch/Bot-Battlr-1/bots${bot.id}`,
      {
        method: "DELETE",
      }
    );
  }

  return (
 <div className="bot-container">
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
          
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          
          <button>Enlist</button>
        </div>
      ))}
    </div>
  </div>
);
}

export default BotCollection;
