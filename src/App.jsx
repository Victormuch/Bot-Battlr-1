import BotCollection from "./components/BotCollection";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import BotDetailsPage from "./components/BotDetailsPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BotCollection />} />
        <Route path="/bots/:botId" element={<BotDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
