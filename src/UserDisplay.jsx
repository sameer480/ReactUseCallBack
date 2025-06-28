import React, { useState, useMemo } from 'react';

function UserDisplay() {
  const [userId, setUserId] = useState(1);
  const [counter, setCounter] = useState(0);

  // useMemo to memoize the user object
  const user = useMemo(() => {
    console.log('Creating user object...');
    return {
      id: userId,
      name: `User ${userId}`
    };
  }, [userId]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h2>User Display</h2>

      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setUserId(prev => prev + 1)}>Change User</button>
        <button onClick={() => setCounter(prev => prev + 1)} style={{ marginLeft: '10px' }}>
          Increment Counter ({counter})
        </button>
      </div>
    </div>
  );
}

export default UserDisplay;
