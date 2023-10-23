import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 2);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
        onClick={handleClick}
      >
        Increase by 2
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterButton;