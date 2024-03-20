import React, { useEffect, useState } from "react";

function UseEffect2() {
  let [size, setSize] = useState(window.screen.width);

  function actualSize() {
    console.log(window.innerWidth);
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", actualSize);

    return () => {
      window.removeEventListener("resize", actualSize);
    }; //cleanup function
    //1.first remove previous size
    //2.add
    //3.give size
  });

  return (
    <>
      <p>The actual size of windows is:</p>
      <h1>{size}</h1>
    </>
  );
}

export default UseEffect2;
