import React from "react";

//import any components needed
import OperatorButton from './OperatorButton.js';

//Import your array data to from the provided data file
import { operators } from '../../../data.js';

const Operators = (props) => {
  console.log('operators', props)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map(operator => <OperatorButton key={operator} operator={operator} addOperator={props.addOperator} />)}
    </div>
  );
};

export default Operators;

