import React, { useState, useEffect } from "react";
import "./App.scss";
import { Card } from "./Card";

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
  const [order, setOrder] = useState(images);

  const updateData = (newData) => {
    if (data.includes(newData)) {
      console.log("game over");
      setData([]);
    } else {
      setData(data.concat(newData));
    }
    images = shuffled(images);
    setOrder(images);
  };

  useEffect(() => {
    images = shuffled(images);
    setOrder(images);
  }, []);

  return (
    <div className="App text-center bg-secondary bg-gradient min-vh-100">
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
      <button className="btn btn-dark" onClick={() => console.log(data)}>
        nice button
      </button>
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
