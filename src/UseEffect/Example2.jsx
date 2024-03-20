import React, { useEffect, useState } from "react";

function Example2() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [WordCount, setWordCount] = useState(0);

  useEffect(() => {
    setCharCount(text.trim().length);

    //word count logic------------------>

    // setWordCount(() => {
    //   let str = text.trim();
    //   let count = 1;
    //   for (let i = 0; i < str.length; i++) {
    //     if (str[i] == " ") {
    //       count++;
    //     }
    //   }
    //   return count;
    // });

    // setWordCount(text.trim().split(" ").length);

    setWordCount(
      text
        .trim()
        .split(" ")
        .filter((e) => e != "").length
    );
  }, [text]);

  return (
    <>
      <textarea
        name=""
        id=""
        cols="50"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <br />
      <h1>Enter inside the textarea: {text}</h1>
      <h3>No. of characters: {charCount}</h3>
      <h3>No. of words: {WordCount}</h3>
      <button onClick={() => setText(text.toUpperCase())}>
        Convert to Uppercase
      </button>
      <br />
      <br />
      <button onClick={() => setText(text.trim().split("").reverse().join(""))}>
        Reverse the string
      </button>
      <br />
      <br />
      <button>Reverse each words</button>
    </>
  );
}

export default Example2;
