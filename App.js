import React from 'react';
import Panier from './Components/Panier';
import Jungle from './Components/Jungle';
import Graine from './Components/Graine';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Jungle /> 
      <Graine /> 
      <Panier /> 
    </div>
  );
}

export default App;
