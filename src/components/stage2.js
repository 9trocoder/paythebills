import React, {useContext} from 'react'
import { AppContext } from '../context';

const Stage2 = () => {
  const context = useContext(AppContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>The Payer is: </h3>
        <div>THE PAYER</div>
      </div>
    </>
  );
}

export default Stage2;