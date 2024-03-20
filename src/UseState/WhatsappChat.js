import React, { useEffect, useState } from "react";

function UseEffect1() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("hello i am useEffect");
    //conditioanl statement always inside the useEffect
    if (count >= 1) {
      document.title = `Chats(${count})`; //using bom properties its count chats on top
    } else {
      document.title = `Chats`;
    }
  }, [count]);
  //[] empty array render once
  //[count] pass somethings means its render that much time
  console.log("hello i am outside");

  useEffect(() => {
    console.log("hello i am 2nd effect");
  }, []);
  //if you have more than 2 useEffect then first useEffect always render first...then 2nd will render

  return (
    <>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

export default UseEffect1;
