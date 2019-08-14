import React from "react";

const SpecialButton = props => {
  console.log('special', props.text, props.clearSpecial)
  return (
    <>
    <button className={'special-button'} onClick={() => props.clearSpecial(props.clearSpecial)}>
      {props.text}
    </button>
    </>
  );
};

export default SpecialButton;
