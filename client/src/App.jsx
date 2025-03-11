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
const [clickedTab, setClickedTab] = useState("");

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className={`tab deploy-tab ${activeTab === "/" ? 'active-tab' : ''} ${clickedTab === "Deploy" ? 'clicked' : ''}`} onClick={() => {setActiveTab("/"); setClickedTab("Deploy");}}>Deploy</Link>
        <Link to="/history" className={`tab ${clickedTab === "History" ? 'clicked' : ''} ${activeTab === "/history" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/history"); setClickedTab("History");}}>History</Link>
        <Link to="/settings" className={`tab ${clickedTab === "Settings" ? 'clicked' : ''} ${activeTab === "/settings" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/settings"); setClickedTab("Settings");}}>Settings</Link>
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