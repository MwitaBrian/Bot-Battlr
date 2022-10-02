import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [botsPage, setBotsPage] =  useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then((response) => response.json())
    .then((bots) => {
      setBotsPage(bots)
    })
  })
  return (
    <div>
      <YourBotArmy />
      <BotCollection botsPage={botsPage} />
    </div>
  )
}

export default BotsPage;
