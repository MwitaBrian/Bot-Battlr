import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botsArmy, onRemoveBot }) {
  //your bot army code here...
  const army = botsArmy.map((bot) => {
    return <BotCard key={bot} bot={bot} handleBotClick={onRemoveBot} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {army}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
