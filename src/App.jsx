import { useContext } from 'react';
import { CountContext } from './CountProvider.jsx';
import Counter from './Counter.jsx'
import ChildCell from './ChildCell.jsx';
import './App.css'

function App(){
  const [countState, setCountState] = useContext(CountContext);

  return (
    <div>
      <div>
        <Counter count={countState}></Counter>
      </div>

      <div class="grid-container">
        <ChildCell className="cellA"/>
        <ChildCell className="cellB"/>
        <ChildCell className="cellC"/>
        <ChildCell className="cellD"/>
      </div>
    </div>
  );
};

export default App;
