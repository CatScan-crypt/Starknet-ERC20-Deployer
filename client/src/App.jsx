
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import React, { useState } from 'react';
import Deploy from './tabs/deploy/Deploy';
import History from './tabs/history/History';
import Settings from './tabs/settings/Settings';

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
