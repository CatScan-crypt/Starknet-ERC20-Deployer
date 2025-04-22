import React from 'react';
import { useAccount } from '@starknet-react/core';

export default function WalletConnectAndSwitch() {
  const { address } = useAccount();

  const handleClearData = () => {
    // Confirm with the user before clearing data
    if (window.confirm('Are you sure you want to clear all local data?')) {
      // Clear specific keys from localStorage
      localStorage.removeItem('deploymentHistory');
      localStorage.removeItem('walletConnection');

      // Clear deployments data based on address
      if (address) {
        const key = `deployments_${address}`;
        localStorage.removeItem(key);
      }

      // Provide feedback to the user
      alert('Local data cleared successfully!');
    }
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
        <button onClick={handleClearData}>Clear Local Data</button>
    </div>
  );
}