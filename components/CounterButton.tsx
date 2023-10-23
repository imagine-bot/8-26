import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 2);
  };

  return (
    <div>
      <button onClick={handleClick}>Increase by 2</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterButton;