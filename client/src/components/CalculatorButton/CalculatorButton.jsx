import React from "react";
import "./CalculatorButton.css";

export default function CalculatorButton({ opOrNumber, propClassName,name,onClick }) {
  return <button 
  className={propClassName}
  name={name}
  onClick={onClick}
  >{opOrNumber}</button>;
}
