import React, { useState, useEffect } from "react";
import "./App.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Card } from "./Card";
import { ScoreBoard } from "./ScoreBoard";
import { StaticModal } from "./StaticModal";

const dogImages = [
  { path: "./assets/dog0.jpg", name: "John Doe" },
  { path: "./assets/dog1.jpg", name: "Bob Doe" },
  { path: "./assets/dog2.jpg", name: "Alex Doe" },
  { path: "./assets/dog3.jpg", name: "Joe Doe" },
  { path: "./assets/dog4.jpg", name: "Doe Winny" },
  { path: "./assets/dog5.jpg", name: "Doe Alphred" },
  { path: "./assets/dog6.jpg", name: "Doe Froedoe" },
  { path: "./assets/dog7.jpg", name: "Doe Brenoe" },
];

const catImages = [
  { path: "./assets/cat0.jpg", name: "Larry M Greene" },
  { path: "./assets/cat1.jpg", name: "Cheryl D Harvey" },
  { path: "./assets/cat2.jpg", name: "Madge P Jessee" },
  { path: "./assets/cat3.jpg", name: "Gary J Mulligan" },
  { path: "./assets/cat4.jpg", name: "Robert R Lewis" },
  { path: "./assets/cat5.jpg", name: "Deneen J Murphy" },
  { path: "./assets/cat6.jpg", name: "Shirley K Rishel" },
  { path: "./assets/cat7.jpg", name: "Joseph R Bland" },
  { path: "./assets/cat8.jpg", name: "Kelly F Mulkey" },
  { path: "./assets/cat9.jpg", name: "Jamila E Medlock" },
  { path: "./assets/cat10.jpg", name: "Robert A Ward" },
  { path: "./assets/cat11.jpg", name: "Christian E Johnson" },
];

let images = dogImages;

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [order, setOrder] = useState(images);
  const [mode, setMode] = useState("Dog");

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

  const changeMode = () => {
    if (mode === "Dog") {
      setMode("Cat");
      images = catImages;
    } else {
      setMode("Dog");
      images = dogImages;
    }
    setOrder(shuffled(images));
    setData([]);
    setScore(0);
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
        <button className="btn btn-dark" onClick={changeMode}>
          {mode === "Dog" ? "Cat" : "Dog"} mode
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
