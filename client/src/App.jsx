
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

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
const [activeTab, setActiveTab] = useState("/");
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className={`tab ${activeTab === "/" ? 'active-tab deploy-tab' : 'deploy-tab'}`} onClick={() => setActiveTab("/")}>Deploy</Link>
        <Link to="/history" className={`tab ${activeTab === "/history" ? 'active-tab' : ''}`} onClick={() => setActiveTab("/history")}>History</Link>
        <Link to="/settings" className={`tab ${activeTab === "/settings" ? 'active-tab' : ''}`} onClick={() => setActiveTab("/settings")}>Settings</Link>
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
