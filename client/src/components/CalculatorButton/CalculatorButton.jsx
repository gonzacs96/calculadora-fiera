import React from 'react'
import "./CalculatorButton.css"

export default function CalculatorButton({opOrNumber,propClassName}) {
  return (
    <button className={propClassName}>{opOrNumber}</button>
  )
}
