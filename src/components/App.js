import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [currentSushiIndex, setCurrentSushiIndex] = useState(0);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((sushis) => setSushis(sushis));
  }, []);

  function handleEatSushi(eatenSushi) {
    if (balance >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, eaten: true };
        } else {
          return sushi;
        }
      });
      setSushis(updatedSushis);
      setBalance((oldBalance) => oldBalance - eatenSushi.price);
    }
  }
  

  function handleAddFunds(amount) {
    setBalance(balance + amount);
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis.slice(currentSushiIndex, currentSushiIndex + 4)}
        onEatSushi={handleEatSushi}
        onMoreSushi={() => setCurrentSushiIndex((currentSushiIndex + 4) % sushis.length)}
        balance={balance}
      />
      <Table plates={sushis.filter((sushi) => sushi.eaten)} balance={balance} onAddFunds={handleAddFunds} />
    </div>
  );
}

export default App;
