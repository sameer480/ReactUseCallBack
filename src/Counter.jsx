import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + step);
  }, [step]); // Only recreate increment when step changes

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Counter with useCallback</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>
      <p>
        <strong>Step:</strong> {step}
      </p>

      <button onClick={increment}>Increment by {step}</button>

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => setStep(step + 1)}>Increase Step</button>
        <button onClick={() => setStep(step - 1)} style={{ marginLeft: '10px' }}>
          Decrease Step
        </button>
      </div>
    </div>
  );
}

export default Counter;
