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

  function handleEatSushi(price) {
    setBalance(balance - price);
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis.slice(currentSushiIndex, currentSushiIndex + 4)}
        onEatSushi={handleEatSushi}
        onMoreSushi={() => setCurrentSushiIndex(currentSushiIndex + 4)}
        balance={balance}
      />
      <Table plates={sushis.filter((sushi) => sushi.eaten)} balance={balance} />
    </div>
  );
}

export default App;
