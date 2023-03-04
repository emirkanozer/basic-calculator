import React from "react";
import "./style.css";
import { figures } from "../figures";
import Results from "../Results";

function Numbers() {
  return (
    <div className="wrapper">
      <Results />
      <div className="numbers">
        {figures.reverse().map((figure) => {
          return <span className="number">{figure.number}</span>;
        })}
      </div>
    </div>
  );
}

export default Numbers;
