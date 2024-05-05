
function YourBotArmy({ enlistedBots, onRelease }) {
  function handleRelease(bot) {
    onRelease(bot);
  }
  return (
    <div className="enlisted-bot-container">
      <h2>Selected Army</h2>
      <div className="enlisted-bots">
        {enlistedBots.map((enlistedBot) => (
          <div key={enlistedBot.id} className="enlisted-bot">
            <h3>{enlistedBot.name}</h3>
            <img src={enlistedBot.avatar_url} alt={enlistedBot.name} />
            <p> {enlistedBot.catchphrase}</p>

            <button
              className="enlisted-bot-button"
              onClick={() => handleRelease(enlistedBot)}
            >
              Release
            </button>
         
          </div>
        ))}
      </div>
    </div>
  );
}

  


export default YourBotArmy;
