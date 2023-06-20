import React from "react";

function Sushi({ sushi, onEatSushi, balance }) {
  const { img_url, name, price, eaten } = sushi;

  function handleEatSushi() {
    if (!eaten && balance >= price) {
      onEatSushi(sushi);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {eaten ? null : (
          <img src={img_url} alt={name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
