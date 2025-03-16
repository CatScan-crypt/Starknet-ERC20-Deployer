import React, { useState, useEffect } from 'react';

const DeploymentHistoryTable = () => {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    // Load deployments from local storage on component mount
    const storedDeployments = localStorage.getItem("deployments");
    if (storedDeployments) {
      setDeployments(JSON.parse(storedDeployments));
    } else {
      // Add mock data if no data exists in local storage
      const mockData = [
        {
          timestamp: new Date().toISOString(),
          contractAddress: "0x1234567890abcdef",
          status: "Success",
          transactionHash: "0xabcdef1234567890",
          tokenName: "MockToken",
          tokenSymbol: "MTK",
          initialSupply: 1000000,
        },
        {
          timestamp: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          contractAddress: "0x0987654321fedcba",
          status: "Success",
          transactionHash: "0xfedcba0987654321",
          tokenName: "AnotherToken",
          tokenSymbol: "ATK",
          initialSupply: 500000,
        },
      ];
      localStorage.setItem("deployments", JSON.stringify(mockData));
      setDeployments(mockData);
    }
  }, []);

  return (
    <table style={{ borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Timestamp</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Contract Address</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Transaction Hash</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Token Name</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Token Symbol</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Initial Supply</th>
        </tr>
      </thead>
      <tbody>
        {deployments.map((deployment, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.timestamp}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.contractAddress}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.status}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.transactionHash}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenName}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.tokenSymbol}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.initialSupply}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeploymentHistoryTable;