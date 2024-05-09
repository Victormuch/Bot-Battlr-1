import React, { useState } from "react";

function BotSpecs() {
  const [bots2, setBots2] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const removeFromArmy = (botId) => {
    const updatedBotArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedBotArmy);
  };

  return (
 
      <Routes>
        <Route
          path="/"
          element={
            <BotSpecs
              bots2={bots2}
              botArmy={botArmy}
              addToArmy={addToArmy}
              removeFromArmy={removeFromArmy}
            />
          }
        />
      </Routes>
  
  );
}

export default BotSpecs;
