import React from "react";

const OperatorButton = (props) => {
  console.log(props.operator.value)
  return (
    <>
    <button className={'operator-button'} onClick={() => props.addOperator(props.operator.value) }>
      {props.operator.char}
    </button>
    </>
  );
};

export default OperatorButton;

/* Display a button element rendering the data being passed down from the parent container on props */ 

