import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotPage({ yourBotArmy, bots, addToArmy, removeFromArmy }) {
  return (
    <div>
      <BotCollection
        bots={bots}
        yourBotArmy={() => addToArmy}
        removeFromArmy={removeFromArmy}
      />
      <YourBotArmy bots={yourBotArmy} />
    </div>
  );
}

export default BotPage;
