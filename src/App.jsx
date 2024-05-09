import BotCollection from "./components/BotCollection";
import BotSpecs from "./components/Botspecs";
import Header from "./components/Header";
import { Routes, Route  } from "react-router-dom";
import BotPage from "./components/BotPage";
import { useState } from "react";

function App() {

  return (
    <div>
      <Header />
      <BotCollection />
  
    </div>
  );
}

export default App;
