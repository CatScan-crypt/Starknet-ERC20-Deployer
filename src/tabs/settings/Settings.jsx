import React from 'react';
import { useAccount } from '@starknet-react/core';

export default function WalletConnectAndSwitch() {
  const { address } = useAccount();

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
        <button onClick={handleExportHistory} style={{ marginTop: '10px' }}>Export History Data</button>
        <button onClick={handleExportHistoryAsCSV} style={{ marginTop: '10px' }}>Export History as CSV</button>
    </div>
  );
}