
import React, { useEffect } from 'react';

const Counter = ({max, step})=>  {


    // Using Custom Hook
    const getStateFromLocalStorage = (defaultValue, key) => {
        const storage = localStorage.getItem(key);
        if (storage) return JSON.parse(storage).value;
        return defaultValue;
    };

    const useLocalStorage = (defaultValue, key) => {
        const initialValue = getStateFromLocalStorage(defaultValue, key);
        const [value, setValue] = React.useState(initialValue);
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify({ value }));
        }, [value, key]);
        return [value, setValue];
    };

  // Calling custom HOOK
  const [count, setCount] = useLocalStorage(0, 'counts');

  // App functions
  const increment = () => {
      setCount(c=>{
          if(c>=max) return c;
          return c+step;
      });
  }
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);

    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    );
}

export default Counter;