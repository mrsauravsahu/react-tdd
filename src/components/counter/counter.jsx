import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>{`Current count is ${count}`}</div>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>
    </>
  );
};
