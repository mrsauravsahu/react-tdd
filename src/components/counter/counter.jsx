import React, { useEffect, useState } from 'react';
import { getNumber } from '../../utils/randomize';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const randomNumber = await getNumber();
    setCount(randomNumber);
  }, []);

  return (
    <div>
      <div>{`Current count is ${count}`}</div>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>
    </div>
  );
};
