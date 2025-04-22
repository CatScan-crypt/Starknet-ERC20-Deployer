import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ConnectWallet from './components/ConnectWallet'
import SwitchChain from './components/SwitchChain'

import React, { useState } from 'react';
import Deploy from './tabs/deploy/Deploy';
import History from './tabs/history/History';
import Settings from './tabs/settings/Settings';
import ContractActions from './tabs/contract-actions/ContractActions';

function App() {

  const [activeTab, setActiveTab] = useState("/");
  const [clickedTab, setClickedTab] = useState("/");

  return (

      <BrowserRouter >
        <div className="app-container">
          <div className="top-right-corner">
            <ConnectWallet/> <SwitchChain/>
            </div>
          </div>
        <nav className="nav">
          <Link to="/" className={`tab deploy-tab ${activeTab === "/" ? 'active-tab' : ''} ${clickedTab === "/" ? 'clicked' : ''}`} onClick={() => {setActiveTab("/"); setClickedTab("/");}}>Deploy</Link>
     
          <Link to="/history" className={`tab ${clickedTab === "/history" ? 'clicked' : ''} ${activeTab === "/history" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/history"); setClickedTab("/history");}}>History</Link>
          <Link to="/settings" className={`tab ${clickedTab === "/settings" ? 'clicked' : ''} ${activeTab === "/settings" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/settings"); setClickedTab("/settings");}}>Settings</Link>
          <Link to="/contract-actions" className={`tab ${clickedTab === "/contract-actions" ? 'clicked' : ''} ${activeTab === "/contract-actions" ? 'active-tab' : ''}`} onClick={() => {setActiveTab("/contract-actions"); setClickedTab("/contract-actions");}}>Contract Actions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Deploy />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contract-actions" element={<ContractActions />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;