
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import React, { useState, useEffect } from 'react';

function Deploy() {
  const [networkConfig, setNetworkConfig] = useState({});

  useEffect(() => {
    const fetchNetworkConfig = async () => {
      const options = ["DEPLOYER_PRIVATE_KEY", "DEPLOYER_ADDRESS", "NETWORK", "RPC_ENDPOINT_SEPOLIA", "RPC_ENDPOINT_MAINNET", "TOKEN_NAME", "SYMBOL_NAME", "DECIMALS_LENGTH", "FIXED_SUPPLY"];
      try {
        const results = await Promise.all(
          options.map(option =>
            fetch(`http://localhost:3001/configure?m=get&o=${option}`, {
              method: 'POST',
            }).then(response => response.json())
          )
        );

        const config = {};
        options.forEach((option, index) => {
          config[option] = results[index].output
        });
        setNetworkConfig(config);
      } catch (error) {
        console.error('Error fetching network config:', error);
        setNetworkConfig({ error: error.message });
      }
    };

    fetchNetworkConfig();
  }, []);

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: '20px' }}>
      <h1>Deploy Page</h1>
      {networkConfig ? (
        networkConfig.error ? (
          <p>Error: {networkConfig.error}</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <table style={{ borderCollapse: 'collapse', width: '80%', marginLeft: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Option</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(networkConfig).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{key}</td>
                  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
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
