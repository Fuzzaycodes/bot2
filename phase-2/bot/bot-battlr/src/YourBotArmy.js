import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
        <h2>Bot Army</h2>
        
      {army.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => removeFromArmy(bot)}
          handleDelete={() => dischargeBot(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
