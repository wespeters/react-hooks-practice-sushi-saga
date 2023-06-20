import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, onMoreSushi, balance }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} balance={balance} />
      ))}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
