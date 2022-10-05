import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botsPage, onAddBotArmy, onDeleteBot}) {
  console.log(botsPage)
  return (
    <div className="ui four column grid">
      <div className="row">
        {botsPage.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBotClick={onAddBotArmy} handleBotDelete={onDeleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
