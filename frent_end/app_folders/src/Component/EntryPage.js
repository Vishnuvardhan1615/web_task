// src/Component/EntryPage.js
import React, { useState } from 'react';

const EntryPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    fetch('https://back-end-dev-3.onrender.com/api_calling', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        setResponseMsg(data.message || 'Login successful!');
      })
      .catch(err => {
        console.error(err);
        setResponseMsg('Something went wrong.');
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Entry Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{responseMsg}</p>
    </div>
  );
};

export default EntryPage;
