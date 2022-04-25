import React, { useState, useEffect } from "react";
import "./App.scss";
import { Card } from "./Card";

const images = [
  { path: "./assets/dog0.jpg", name: "John Doe" },
  { path: "./assets/dog1.jpg", name: "Bob Doe" },
  { path: "./assets/dog2.jpg", name: "Alex Doe" },
  { path: "./assets/dog3.jpg", name: "Joe Doe" },
  { path: "./assets/dog4.jpg", name: "Doe Winny" },
  { path: "./assets/dog5.jpg", name: "Doe Alphred" },
  { path: "./assets/dog6.jpg", name: "Doe Froedoe" },
  { path: "./assets/dog7.jpg", name: "Doe Brenoe" },
];

function App() {
  const data = new Set();
  const [status, setStatus] = useState("game");

  const updateData = (newData) => {
    if (data.has(newData)) {
      console.log("game over");
      setStatus("over");
      data.clear();
    } else {
      data.add(newData);
    }
    console.log(data);
  };

  return (
    <div className="App text-center bg-secondary bg-gradient min-vh-100">
      <div className="display-5 bg-dark bg-gradient text-light py-3">
        Memory Game
      </div>
      <div className="container">
        <div className="row justify-content-center gx-3 gy-3 py-3">
          {images.map((obj) => {
            return (
              <Card image={obj.path} name={obj.name} updateData={updateData} />
            );
          })}
        </div>
      </div>
      <button className="btn btn-dark">nice button</button>
    </div>
  );
}

export default App;
