import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, balance }) {
  const [eaten, setEaten] = useState(false);

  function handleClick() {
    if (!eaten && balance >= sushi.price) {
      setEaten(true);
      onEatSushi(sushi.price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : <img src={sushi.img_url} alt={sushi.name} />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
