import React, { useState } from "react";
import "./Calculator.css";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

export default function Calculator({ numbers, operators }) {
  const [state, setState] = useState({
    display: "",
  });

  const onEqualClick = (event) => {
    const getResult= new Function(`return function operation (){
      return ${state.display}
    }`)();
    setState({
      ...state,
      display:`${getResult()}`
    })
  };

  const onOperationButtonClick=(event)=>{
    setState(prevState=>{
      return {
        ...prevState,
        display:prevState.display+event.target.name,
      }
    })
  }

  const onButtonResetClick=(event)=>{
    setState(prevState=>{
      return {
        ...prevState,
        display:"",
      }
    })
  }

  const onButtonNumberClick=(event)=>{
    setState(prevState=>{
      return {
        ...prevState,
        display:prevState.display+event.target.name
      }
    })
  }

  return (
    <div className="calculator">
      <div className="calculator-header">
        <div className="calculator-display">{state.display}</div>
      </div>
      <div className="calculator-body">
        <div className="calculator-numbers">
          <CalculatorButton
            opOrNumber={"C"}
            propClassName="button-reset"
            onClick={onButtonResetClick}
            name="C"
          />
          {numbers.map((number) => {
            return (
              <CalculatorButton
                opOrNumber={number}
                propClassName={number === "0" ? "button-cero" : "number-button"}
                onClick={onButtonNumberClick}
                name={number}
              />
            );
          })}
        </div>
        <div className="calculator-operators">
          {operators.map((op) => {
            return (
              <CalculatorButton
                opOrNumber={op}
                propClassName="operator-button"
                onClick={op==="="?onEqualClick:onOperationButtonClick}
                name={op}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
