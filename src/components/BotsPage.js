import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [botsPage, setBotsPage] =  useState([]);
  const [botsArmy, setBotsArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then((response) => response.json())
    .then((bots) => {
      setBotsPage(bots)
    })
  }, [])

  function addBot(bot) {
    const addedArmy = botsArmy.find((robot) => robot.id === bot.id)
    if (!addedArmy) setBotsArmy([...botsArmy, bot])
    }

  function removeBot(bot) {
    const removedArmy = botsArmy.find((robot) => robot.id === bot.id)
    if (removedArmy) {
      setBotsArmy(botsArmy.filter((robots) => robots.id !== bot.id))
    }
  }

  function deleteBot(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
  }
  
  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} onRemoveBot={removeBot} />
      <BotCollection botsPage={botsPage} onAddBotArmy={addBot} onDeleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
