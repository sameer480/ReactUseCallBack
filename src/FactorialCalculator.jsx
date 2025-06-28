import React, { useState, useMemo } from 'react';

// Expensive factorial calculation
function computeFactorial(n) {
  console.log('Calculating factorial...');
  if (n <= 0) return 1;
  return n * computeFactorial(n - 1);
}

function FactorialCalculator() {
  const [number, setNumber] = useState(5);
  const [toggle, setToggle] = useState(false);

  // Memoize factorial calculation
  const factorial = useMemo(() => {
    return computeFactorial(number);
  }, [number]); // Only recompute when `number` changes

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>Factorial Calculator</h2>

      <p>
        <strong>Number:</strong> {number}
      </p>
      <p>
        <strong>Factorial:</strong> {factorial}
      </p>

      <div>
        <button onClick={() => setNumber(prev => prev + 1)}>Increment Number</button>
        <button onClick={() => setToggle(prev => !prev)} style={{ marginLeft: '10px' }}>
          Toggle ({toggle ? 'ON' : 'OFF'})
        </button>
      </div>
    </div>
  );
}

export default FactorialCalculator;
