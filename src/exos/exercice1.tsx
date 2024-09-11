import { useState } from 'react';

// CONVERT THIS useState TO useReducer
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => setStep(Number(event.target.value));

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        value={step}
        onChange={handleStepChange}
        placeholder="Step"
      />
    </div>
  );
};

export default Counter;