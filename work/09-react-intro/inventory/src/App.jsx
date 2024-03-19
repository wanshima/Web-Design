import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';


function App() {
  const [count, setCount] = useState(0);

  const onReorder = () => setCount(5);

  return (
    <>
      <div className="card">
        <div className="button-group">
          <button onClick={() => setCount(current => Math.max(0, current - 1))} disabled={!count}>-</button>
          <span>Count is {count}</span>
          <button onClick={() => setCount(current => current + 1)}>+</button>
          {count === 0 && <Reorder onReorder={onReorder} />}
        </div>
      </div>
    </>
  );
}

export default App;