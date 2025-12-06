import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <div className="p-3">
        <h1>Counter: {count}</h1>
      </div>
      <div className="flex gap-2">
        <button className="bg-amber-200 p-2  rounded-md" onClick={increment}>
          Increment
        </button>
        <button className="bg-amber-200 p-2  rounded-md" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
