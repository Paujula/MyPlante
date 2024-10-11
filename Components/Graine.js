import React, { useState } from 'react';

const Graine = () => {

  const [choix, setChoix] = useState('---');

 
  const handleReset = () => {
    setChoix('---');
  };

  return (
    <div className='graine'>
      <select value={choix} onChange={(e) => setChoix(e.target.value)}>
        <option value="---">---</option>
        <option value="Classique">Classique</option>
        <option value="Extérieure">Extérieure</option>
        <option value="Plante grasse">Plante grasse</option>
      </select>

      <button onClick={handleReset} className='mygraine'> Réinitialiser</button>
    </div>
  );
};

export default Graine;
