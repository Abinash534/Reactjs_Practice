import React, { useState } from "react";

function BasicForm() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [store, setStore] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    if (email && pass) {
      let newStore = {
        id: new Date().getTime().toString(),
        email: email,
        pass: pass,
      };
      setStore([...store, newStore]);
      setEmail("");
      setPass("");
    } else {
      alert("Please fill the input");
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="pass"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {store.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.email}</p>
              <p>{e.pass}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BasicForm;
