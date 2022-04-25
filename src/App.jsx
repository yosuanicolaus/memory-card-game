import React, { useState, useEffect } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Card } from "./Card";
import { ScoreBoard } from "./ScoreBoard";
import { StaticModal } from "./StaticModal";

let images = [
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
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [order, setOrder] = useState(images);

  const updateData = (newData) => {
    if (data.includes(newData)) {
      console.log("game over");
      setData([]);
      setScore(0);
    } else {
      setData(data.concat(newData));
      setScore(score + 1);
    }
    setOrder(shuffled(images));
  };

  useEffect(() => {
    setOrder(shuffled(images));
  }, []);

  return (
    <div className="App text-center bg-light bg-gradient min-vh-100">
      <div className="display-5 bg-dark bg-gradient text-light py-3">
        Memory Game
      </div>
      <div className="container">
        <div className="row justify-content-center gx-3 gy-3 py-3">
          {order.map((obj) => {
            return (
              <Card
                image={obj.path}
                name={obj.name}
                updateData={updateData}
                key={obj.name}
              />
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center pb-5 gap-2">
        <button className="btn btn-dark" onClick={() => console.log(data)}>
          nice button
        </button>
        <StaticModal />
      </div>
      <ScoreBoard score={score} />
    </div>
  );
}

function shuffled(arr) {
  const a = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default App;
