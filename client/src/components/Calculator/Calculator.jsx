import React from "react";
import "./Calculator.css";
import CalculatorButton from "../CalculatorButton/CalculatorButton";



export default function Calculator({numbers,operators}) {
  return (
    <div className="calculator">
      <div className="calculator-header">
        <div className="calculator-display">0</div>
      </div>
      <div className="calculator-body">
        <div className="calculator-numbers">
          <CalculatorButton opOrNumber={"C"} propClassName="button-reset"/>
          {numbers.map((number) => {
            return <CalculatorButton opOrNumber={number} propClassName={number==="0"?"button-cero":"number-button"}/>;
          })}
        </div>
        <div className="calculator-operators">
          {operators.map((op) => {
            return <CalculatorButton opOrNumber={op} propClassName="operator-button"/>;
          })}
        </div>
      </div>
    </div>
  );
}
