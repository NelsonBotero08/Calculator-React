import React from 'react'
import "../sheestStyleComponents/Buttons.css"

const Buttons = ({children, addInput}) => {

  const isOperator = (worth) =>{
    return isNaN(worth) && (worth !== ".") && (worth !== "=")
  }

  return (
    <div className={`container__button ${isOperator(children) ? "operator" : ""}`.trimEnd()}
    onClick={ () => addInput(children)}>
        {children}
    </div>
  )
}

export default Buttons
