import { useEffect, useState } from 'react';
import "./Counter.css"


export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    if (count > 0) {
        setCount(count - 1);
    }
  }

  useEffect(() => {
    console.log(`Count value is: ${count}`);
  }, [count]);

  return (
    <>
    <h3>  
        {count}
      </h3>
      <button className="Counter" onClick={increaseCounter}>
        Increase
      </button>
      <button className="Counter" onClick={decreaseCounter}>
        Decrease
      </button>
    </>
  );
}