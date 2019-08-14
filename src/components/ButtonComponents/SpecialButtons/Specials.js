import React from "react";

//import any components needed
import SpecialButtons from './SpecialButtons';

//Import your array data to from the provided data file
import { special } from '../../../data.js';

const Specials = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {Special.map(special => <SpecialButton special={special} />)}
    </div>
  );
};
