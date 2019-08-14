import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton.js'

//Import your array data to from the provided data file
import { numbers } from '../../../data.js'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  return (
    <div>
      {buttonNumbers.map(number => <NumberButton key={number} text={number} />)}
    </div>
  )
  
};

export default Numbers;