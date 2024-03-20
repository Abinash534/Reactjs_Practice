import React, { useState } from "react";

function ArrayUseState() {
  let bioData = [
    { id: 0, name: "abhi", age: 26 },
    { id: 1, name: "akash", age: 27 },
    { id: 2, name: "abinash", age: 28 },
  ];
  let [state, setState] = useState(bioData);

  function removeHandler(id) {
    let newData = state.filter((e) => {
      return e.id != id;
    });
    setState(newData);
  }

  return (
    <>
      {state.map((e) => {
        return (
          <h1>
            Name:{e.name} & Age:{e.age}
            <button
              className="btn btn-danger"
              onClick={() => removeHandler(e.id)}
            >
              Remove
            </button>
          </h1>
        );
      })}
    </>
  );
}

export default ArrayUseState;
