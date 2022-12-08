import React from 'react';
import data from'./data';
import Animalcard from '../Animalcard/Animalcard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard key={animal.name}/>
      ))}
    </div>
  ) 
}

export default App;
