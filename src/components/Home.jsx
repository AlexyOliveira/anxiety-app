import React, { useEffect, useState } from "react";

function Home() {
    const [name, setName] = useState('')
    useEffect(() => {
       const userName = localStorage.getItem("anxietappname")
       setName(userName)
      }, []);
  return <div>
    <h1>Seja bem-vindo(a) {name}!</h1>
  </div>;
}

export default Home;
