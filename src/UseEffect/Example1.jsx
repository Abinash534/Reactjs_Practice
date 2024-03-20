import React, { useEffect, useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (count < 0) setColor("grey"); //for one line we can remove bracket
    else if (count > 0 && count <= 5) setColor("red");
    else if (count == 6) setColor("yellow");
    else if (count > 6 && count <= 10) setColor("blue");
    else if (count == 15) setColor("purple");
    else if (count > 10) setColor("brown");
    else setColor("black");
  }, [count]);

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "400px",
          margin: "50px auto",
          backgroundColor: color,
          boxShadow: "0 0 25px green",
        }}
      >
        <h4 style={{ color: "white" }}>
          Background color change while Count: {count}
        </h4>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

export default Example1;
