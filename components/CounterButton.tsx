import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 2);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="px-4 py-2 rounded-20 w-12 h-12 bg-yellow-500 text-red-500 text-sm font-serif hover:bg-blue-500 hover:text-white transition-colors"
        onClick={handleClick}
        style={{fontFamily: 'Garamond'}}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterButton;