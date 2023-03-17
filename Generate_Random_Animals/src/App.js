import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";
const getRandomAnimals = () => {
  const animals = ["cow", "bird", "dog", "cat", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  console.log(animals);
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimal}</div>
    </div>
  );
}

export default App;
