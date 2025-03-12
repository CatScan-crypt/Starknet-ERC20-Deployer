
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import React, { useState, useEffect } from 'react';

function Deploy() {
  const [networkConfig, setNetworkConfig] = useState(null);

  useEffect(() => {
    const fetchNetworkConfig = async () => {
      try {
        const response = await fetch('http://localhost:3001/configure?m=get&o=NETWORK', {
          method: 'POST',
        });
        const data = await response.json();
        setNetworkConfig("Network=" + data.output.replace(/\\n/g, ""));
      } catch (error) {
        console.error('Error fetching network config:', error);
        setNetworkConfig({ error: error.message });
      }
    };

    fetchNetworkConfig();
  }, []);

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Deploy Page</h1>
      {networkConfig ? (
        networkConfig.error ? (
          <p>Error: {networkConfig.error}</p>
        ) : (
          <pre>{networkConfig}</pre>
        )
      ) : (
        <p>Loading network configuration...</p>
      )}
    </div>
  );
}

function History() {
  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>History Page</h1>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Settings Page</h1>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("/");
const [clickedTab, setClickedTab] = useState("/");

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/" className={`tab deploy-tab ${activeTab === "/" ? 'active-tab' : ''} ${clickedTab === "/" ? 'clicked' : ''}`} onClick={() => {setActiveTab("/"); setClickedTab("/");}}>Deploy</Link>
        <Link to="/history" className={`tab ${clickedTab === "/history" ? 'clicked' : ''} ${activeTab === "/history" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/history"); setClickedTab("/history");}}>History</Link>
        <Link to="/settings" className={`tab ${clickedTab === "/settings" ? 'clicked' : ''} ${activeTab === "/settings" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/settings"); setClickedTab("/settings");}}>Settings</Link>
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
