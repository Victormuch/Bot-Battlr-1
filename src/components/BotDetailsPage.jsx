import { useEffect, useState } from "react";
import BotDetails from "./BotDetails";
import { useParams } from "react-router-dom";

function BotDetailsPage() {
  const { botId } = useParams();
  const [bot, setBot] = useState(null);

  // Define handleEnlist function
  function handleEnlist(bot) {
    console.log("Enlisting Bot", bot);
    // Logic to enlist the bot can go here
  }

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/Victormuch/Bot-Battlr-1/bots/${botId}`
    )
      .then((res) => res.json())
      .then((bot) => setBot(bot));
  }, [botId]);

  return (
    <div>
      {bot ? <BotDetails bot={bot} onEnlist={handleEnlist} /> : <h1>Loading...</h1>}
    </div>
  );
}

export default BotDetailsPage;