import React from "react";
import { useHistory } from "react-router-dom";

function BotSpecs({ bot, onEnlist }) {
  const history = useHistory();

  const handleEnlist = () => {
    onEnlist(bot);
    history.push("/");
  };

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={handleEnlist}>Enlist</button>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

export default BotSpecs;
