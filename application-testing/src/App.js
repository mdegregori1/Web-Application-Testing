import React, { useState } from 'react';
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const strike = () => {
    if (strikes === 3 ){
      setStrikes(0);
      setBalls(0)
    } else {
      setStrikes(strikes + 1);
    }

  }
  const ball = () => {
    if (balls === 4){
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1 );
    }

  }

  const foul = () => {
    if (strikes === 2){
      setStrikes(strikes);
    } else {
      setStrikes(strikes + 1);
    }
  }

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  }
  return (
    <div>
      <Dashboard
      hit={hit}
      ball={ball}
      strike={strike}
      foul={foul}
      balls={balls}
      strikes={strikes}
      />
    </div>
  );
}

export default App;

