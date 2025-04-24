import React, { useState } from 'react';
import { useAccount } from '@starknet-react/core';

export default function WalletConnectAndSwitch() {
  const { address } = useAccount();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all local data?')) {
      localStorage.removeItem('deploymentHistory');
      localStorage.removeItem('walletConnection');
      if (address) {
        const key = `deployments_${address}`;
        localStorage.removeItem(key);
      }
      alert('Local data cleared successfully!');
    }
  };

  const handleExportHistory = () => {
    if (address) {
      const key = `deployments_${address}`;
      const storedDeployments = localStorage.getItem(key);
      if (storedDeployments) {
        const blob = new Blob([storedDeployments], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `deployment_history_${address}.json`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert('No deployment history found to export.');
      }
    } else {
      alert('Please connect your wallet to export history.');
    }
  };

  const handleExportHistoryAsCSV = () => {
    if (address) {
      const key = `deployments_${address}`;
      const storedDeployments = localStorage.getItem(key);
      if (storedDeployments) {
        const deployments = JSON.parse(storedDeployments);
        const headers = Object.keys(deployments[0] || {}).join(',');
        const rows = deployments.map(deployment => Object.values(deployment).join(','));
        const csvContent = [headers, ...rows].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `deployment_history_${address}.csv`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert('No deployment history found to export.');
      }
    } else {
      alert('Please connect your wallet to export history.');
    }
  };

  const handleExportHistoryAsTXT = () => {
    if (address) {
      const key = `deployments_${address}`;
      const storedDeployments = localStorage.getItem(key);
      if (storedDeployments) {
        const blob = new Blob([storedDeployments], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `deployment_history_${address}.txt`;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert('No deployment history found to export.');
      }
    } else {
      alert('Please connect your wallet to export history.');
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
              <button onClick={handleExportHistory} style={{ display: 'block', width: '100%' }}>Export History as JSON</button>
              <button onClick={handleExportHistoryAsCSV} style={{ display: 'block', width: '100%' }}>Export History as CSV</button>
              <button onClick={handleExportHistoryAsTXT} style={{ display: 'block', width: '100%' }}>Export History as txt</button>
            </div>
          )}
        </div>
    </div>
  );
}