import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('https://bookm1.vercel.app/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (id) => {
    fetch(`https://bookm1.vercel.app/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== id));
        setBots(bots.filter((bot) => bot.id !== id)); 
      });
  };

  return (
    <div>
      <h1>Bot battlr</h1>
      <div className='bot-sections'> 
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
      </div>
    </div>
  );
}

export default App;
