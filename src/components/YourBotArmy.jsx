import { Link } from "react-router-dom";

function YourBotArmy({ enlistedBots, onRelease, onEnlist }) {
  function handleRelease(bot) {
    onRelease(bot);
  }
function handleEnlist(bot){
  onEnlist(bot)
}



  return (
    <div className="enlisted-bot-container">
      <h2>Selected Army</h2>
      <div className="enlisted-bots">
        {enlistedBots.map((enlistedBot) => (
          <Link
            key={enlistedBot.id}
            className="enlisted-bot"
            onClick={() => handleRelease(enlistedBot)}
          >
            <h3>{enlistedBot.name}</h3>
            <img src={enlistedBot.avatar_url} alt={enlistedBot.name} />
            <p> {enlistedBot.catchphrase}</p>
            <button
              className="enlisted-bot-button"
              onClick={() => handleRelease(enlistedBot)}
            >
              Release
            </button>
            <button
              className="enlisted-bot-button"
              onClick={() => handleEnlist(enlistedBot)}
            >
              Enlist
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
