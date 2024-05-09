function BotDetails({bot}) {

  function handleEnlist(){
    OnEnlist(bot)
  }
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p> Health:{bot.health}</p>
      <p> Damage:{bot.damage}</p>
      <p> Armor:{bot.armor}</p>
<button onClick={handleEnlist}>Enlist</button>
    </div>
  );
}

export default BotDetails;
