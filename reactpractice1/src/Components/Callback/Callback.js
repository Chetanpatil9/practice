import React, { useState, useCallback } from 'react';

function Callback(props) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div> 
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

function ChildComponent(props) {
  return (
    <div>
      <p>Child component</p>
      <button onClick={props.handleClick}>Increment Count</button>
    </div>
  );
}

export default Callback;