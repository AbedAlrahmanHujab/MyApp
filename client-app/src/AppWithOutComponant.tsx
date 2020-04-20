import React from "react";
import "./App.css";
import { cars } from "./Cars";
import { CarItem } from "./CarItem";

function App() {
  return (
    <div className="App">
      <ul>
        {/* this first way */}
        {cars.map((car) => (
          <li>
            {car.color}-{car.model}-{car.topspeed}
          </li>
        ))}
        {/* this second way */}
        {cars.map((car) => (
          <CarItem car={car}></CarItem>
        ))}
      </ul>
    </div>
  );
}

export default App;
