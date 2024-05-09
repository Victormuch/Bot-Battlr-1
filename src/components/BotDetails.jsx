function BotDetails({bot}) {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p> Health:{bot.health}</p>
      <p> Damage:{bot.damage}</p>
      <p> Armor:{bot.armor}</p>
    </div>
  );
}

export default BotDetails;
