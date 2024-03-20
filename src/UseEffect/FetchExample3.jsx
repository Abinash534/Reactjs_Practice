import React, { useEffect, useState } from "react";

function FetchExample3() {
  let [user, setUser] = useState([]);

  //1st method: fetching any api always use useEffect
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => setUser(data))
    //   .catch((error) => console.log(error));

    fetchData();
  }, []);

  //2nd method
  async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setUser(data);
  }

  return (
    <>
      <h1>Fetch Data</h1>
      {user.map((e) => {
        return <li>{e.name}</li>;
      })}
    </>
  );
}

export default FetchExample3;
