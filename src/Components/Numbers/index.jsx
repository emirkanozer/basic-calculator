import React from "react";
import "./style.css";
import { figures, operators } from "../figures";
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
      <div className="numbers">
        {operators.map((operator) => {
          return <span className="number"> {operator.op} </span>;
        })}
      </div>
    </div>
  );
}

export default Numbers;
