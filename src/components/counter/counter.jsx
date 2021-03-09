import React, { useEffect, useState } from 'react';
import { getNumber } from '../../utils/randomize';
import styles from './counter.module.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const randomNumber = await getNumber();
    setCount(randomNumber);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.message}>{`Current count is ${count}`}</div>
      <button
        className={styles.incrementButton}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter
      </button>
    </div>
  );
};
