import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="bot-collection">
        <h2>Collection</h2>
        
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
