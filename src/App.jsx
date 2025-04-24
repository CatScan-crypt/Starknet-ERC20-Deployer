import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DisconnectWallet from './components/DisconnectWallet'
import SwitchChain from './components/SwitchChain'
import { StarknetKit } from "./components/starknetkit";
import Dropdown from './components/ui/dropdown';

import React, { useState } from 'react';
import Deploy from './tabs/deploy/Deploy';
import History from './tabs/history/History';
import Settings from './tabs/settings/Settings';
import ContractActions from './tabs/contract-actions/ContractActions';

function Header({ handleSelect }) {
  return (
    <header className="header">
      <span className="header-title">ERC20 Deployer on Starknet</span>
      <div className="wallet-actions">
        <Dropdown
          title="Wallet Actions"
          options={[
            <div><StarknetKit></StarknetKit></div>,
            <div><DisconnectWallet/></div>,
            <div><SwitchChain/></div>
          ]}
          onSelect={handleSelect}
        />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/CatScan-crypt/Starknet-ERC20-Deployer" target="_blank" rel="noopener noreferrer">
          <img src="/GitHub.png" alt="GitHub" width="24" height="24" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/marian-roth/" target="_blank" rel="noopener noreferrer">
          <img src="/LinkedIn.png" alt="LinkedIn" width="24" height="24" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://t.me/Cat2can" target="_blank" rel="noopener noreferrer">
          <img src="/Telegram.png" alt="Telegram" width="24" height="24" />
        </a>
      </div>
    </footer>
  );
}

function App() {

  const [activeTab, setActiveTab] = useState("/");
  const [clickedTab, setClickedTab] = useState("/");

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <>
      <Header handleSelect={handleSelect} />
      <BrowserRouter >
        <div className="app-container">
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
      <Footer />
    </>
  );
}

export default App;