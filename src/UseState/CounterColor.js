import React, { useState } from "react";

function CounterColor() {
  let [state, setState] = useState(0);
  let [color, setColor] = useState(
    `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(
      Math.random() * 255
    )},${Math.trunc(Math.random() * 255)}`
  );

  function incHandler() {
    setState(state + 1);
    if (color == "white") {
      setColor(
        `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(
          Math.random() * 255
        )},${Math.trunc(Math.random() * 255)}`
      );
    } else {
      setColor("white");
    }
  }
  function decHandler() {
    if (!state <= 0) setState(state - 1);
    if (color == "white") {
      setColor("red");
    } else {
      setColor("white");
    }
  }
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          height: "250px",
          width: "500px",
          margin: "100px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        <div>
          <p>
            <b>Counter:{state}</b>
          </p>
          <div>
            <button className="btn btn-primary m-2" onClick={incHandler}>
              +
            </button>
            <button className="btn btn-primary m-2" onClick={decHandler}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterColor;
