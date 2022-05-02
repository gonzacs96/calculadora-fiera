import React, { useState } from "react";
import "./Calculator.css";
import CalculatorButton from "../CalculatorButton/CalculatorButton";

export default function Calculator({ numbers, operators }) {
  const [state, setState] = useState({
    msg: "Ingrese el primer número",
    operator: "",
    displayNumber: "",
    firstNumber: null,
  });

  const onEqualClick = (event) => {
    const secondNumber = parseFloat(state.displayNumber);
    const operations = {
      "+": () => {
        setState((prevState) => {
          return {
            ...prevState,
            msg: "Presione el boton C para realizar otra operación",
            displayNumber: (prevState.firstNumber + secondNumber).toString(),
          };
        });
      },
      "-": () => {
        setState((prevState) => {
          return {
            ...prevState,
            msg: "Presione el boton C para realizar otra operación",
            displayNumber: (prevState.firstNumber - secondNumber).toString(),
          };
        });
      },
      "*": () => {
        setState((prevState) => {
          return {
            ...prevState,
            msg: "Presione el boton C para realizar otra operación",
            displayNumber: (prevState.firstNumber * secondNumber).toString(),
          };
        });
      },
      "/": () => {
        secondNumber === 0 && divideValidation();
        secondNumber !== 0 &&
          setState((prevState) => {
            return {
              ...prevState,
              msg: "Presione el boton C para realizar otra operación",
              displayNumber: (prevState.firstNumber / secondNumber).toString(),
            };
          });
      },
    };
    const operatorSelected = state.operator;

    state.displayNumber!=="" && state.displayNumber!=="-" && state.firstNumber!==null && operations[operatorSelected]();
  };

  const onOperationButtonClick = (event) => {
    const numberToSave = parseFloat(state.displayNumber);
    const operatorSelected = event.target.name;

    operatorSelected==="-" && state.displayNumber==="" && setState({...state,displayNumber:"-"});

    state.displayNumber!=="" && state.displayNumber!=="-" && state.operator==="" && setState((prevState) => {
      return {
        ...prevState,
        msg: "Ingrese el segundo número",
        firstNumber: numberToSave,
        displayNumber: "",
        operator: operatorSelected,
      };
    });
  };

  const onButtonResetClick = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        msg: "Ingrese el primer número",
        displayNumber: "",
        operator: "",
        firstNumber: null,
      };
    });
  };

  const onButtonNumberClick = (event) => {
    const numberClicked = event.target.name;
    const concatNumberToDisplay = state.displayNumber + numberClicked;
    setState((prevState) => {
      return {
        ...prevState,
        displayNumber: concatNumberToDisplay,
      };
    });
  };

  const divideValidation = () => {
    alert("No se puede dividir por cero!");
    onButtonResetClick();
  };

  return (
    <div className="container">
      <div className="msg-calculator">{state.msg}</div>
      <div className="calculator">
        <div className="calculator-header">
          <div className="calculator-display">{state.displayNumber}</div>
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
                  propClassName={
                    number === "0" ? 
                    "button-cero" : 
                    number === "." ?
                    "button-point":
                    "number-button"
                  }
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
                  onClick={op === "=" ? onEqualClick : onOperationButtonClick}
                  name={op}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
