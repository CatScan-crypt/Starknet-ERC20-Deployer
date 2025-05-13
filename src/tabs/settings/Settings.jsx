import React, { useState } from 'react';
import { useAccount } from '@starknet-react/core';
import TimezoneSelector from './TimezoneSelector';
import { handleClearData } from './clearData';
import { handleExportHistory, handleExportHistoryAsCSV, handleExportHistoryAsTXT } from './exportHistory';

export default function WalletConnectAndSwitch() {
  const { address } = useAccount();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleTimezoneChange = (timezone) => {
    console.log('Selected timezone:', timezone);
  };

  return (
    <div style={{ 
      backgroundColor: 'grey', 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'center' }}>
        
        <h1>Settings Page</h1>
        <button onClick={() => handleClearData(address)}>Clear Local Data</button>

        <div style={{ position: 'relative', marginTop: '20px' }}>
          <button onClick={toggleDropdown}>Export History</button>
          {dropdownOpen && (
            <div style={{ 
              position: 'absolute', 
              top: '100%', 
              left: 0, 
              backgroundColor: 'white', 
              border: '1px solid black', 
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
              zIndex: 1000 }}>
              <button onClick={() => handleExportHistory(address)} style={{ display: 'block', width: '100%' }}>Export History as JSON</button>
              <button onClick={() => handleExportHistoryAsCSV(address)} style={{ display: 'block', width: '100%' }}>Export History as CSV</button>
              <button onClick={() => handleExportHistoryAsTXT(address)} style={{ display: 'block', width: '100%' }}>Export History as txt</button>
            </div>
          )}
        </div>

        <TimezoneSelector onTimezoneChange={handleTimezoneChange} />
    </div>
  );
}