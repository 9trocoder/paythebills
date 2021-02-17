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
      <div 
        className="action_button" 
        onClick={()=>context.resetPayer()}
      >
        Reset Game
      </div>
      <div 
        className="action_button btn_2" 
        onClick={() => context.getNewPayer()}
      >
        Retry..
      </div>
    </>
  );
}

export default Stage2;