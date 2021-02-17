import React, {useContext} from 'react'
import { AppContext } from '../context';

const Stage2 = () => {
  const context = useContext(AppContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>The Payer is: </h3>
        <div>{context.state.result}</div>
      </div>
      <div className="action_button">
        Retry...
      </div>
      <div className="action_button btn_2">
        Get a new payer
      </div>
    </>
  );
}

export default Stage2;