
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Deploy() {
  return (
    <div style={{ backgroundColor: 'red', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Deploy Page</h1>
    </div>
  );
}

function History() {
  return (
    <div style={{ backgroundColor: 'green', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>History Page</h1>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ backgroundColor: 'blue', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Settings Page</h1>
    </div>
  );
}

function App() {
  const tabStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderBottom: 'none',
    borderRadius: '5px 5px 0 0',
    marginRight: '5px',
  };

  const navStyle = {
    backgroundColor: '#e0e0e0',
    padding: '10px',
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={tabStyle}>Deploy</Link>
        <Link to="/history" style={tabStyle}>History</Link>
        <Link to="/settings" style={tabStyle}>Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Deploy />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
