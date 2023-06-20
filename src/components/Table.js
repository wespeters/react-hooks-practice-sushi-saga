import React, { useState } from "react";

function Table({ plates, balance, onAddFunds }) {
  const [fundInput, setFundInput] = useState("");

  const emptyPlates = Array(plates.length)
    .fill()
    .map((_, index) => (
      <div key={index} className="empty-plate" style={{ top: -7 * index }} />
    ));

  function handleInputChange(event) {
    setFundInput(event.target.value);
  }

  function handleAddFunds(event) {
    event.preventDefault();
    onAddFunds(Number(fundInput));
    setFundInput("");
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <div style={{ textAlign: "center", marginTop: "1em" }}>
        <form onSubmit={handleAddFunds}>
          <input
            type="number"
            value={fundInput}
            onChange={handleInputChange}
          />
          <button type="submit">Add Funds</button>
        </form>
      </div>
    </>
  );
}

export default Table;
