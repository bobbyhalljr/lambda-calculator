import React from "react";

const NumberButton = (props) => {
  console.log('NumberButton', props.addNumber)
  return (
    <button className={'number-button'} onClick={() => props.addNumber(props.text)}>
      {props.text}
    </button>
  );
};

export default NumberButton;