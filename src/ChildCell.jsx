import { useContext, useState } from 'react';
import { CountContext } from './CountProvider.jsx';

import './ChildCell.css'

// off = white/unclicked, on = black/clicked
function ChildCell(){

  const [countState, setCountState] = useContext(CountContext);
  const [isOn, setIsOn] = useState(false);

  function cellFilled(){
    setIsOn(!isOn);

    // increase and decrease count when clicked
    if(isOn === true){
      setCountState(countState - 1);
    }
    else {
      setCountState(countState + 1);
    };
  };

  // styling based off clicked or not clicked
  let cellClass = "";
  if (!isOn){  // if unclicked:
    cellClass="ChildCell";
  }
  else {cellClass="blackOut";
  }
  return (
    <div>
      <div className={cellClass} onClick= {() => cellFilled()}></div>
    </div>
  );
};

export default ChildCell;