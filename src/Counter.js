import React, { useState } from "react";
export const Counter = () => {
  const [currentCount, setcurrentCount] = useState(0);
  const minusOne = () => {
    setcurrentCount(currentCount + 1);
  };
  const resetCount = () => {
    setcurrentCount(0);
  };
  return (
    <div>
      <h2>Count: {currentCount}</h2>
      <button onClick={minusOne}>minus 1</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};
export default Counter;
