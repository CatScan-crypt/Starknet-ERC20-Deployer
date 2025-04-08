import React, { useState, useEffect } from 'react';
import { useAccount } from "@starknet-react/core";

const DeploymentHistoryTable = () => {
  const [deployments, setDeployments] = useState([]);
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      // Load deployments from local storage on component mount
      const key = `deployments_${address}`;
      const storedDeployments = localStorage.getItem(key);
      if (storedDeployments) {
        setDeployments(JSON.parse(storedDeployments));
      }
    }
  }, [address]);

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
            <td style={{ border: '1px solid black', padding: '8px' }}>{new Date(deployment.timestamp).toISOString().slice(0, 10)} - {String(new Date(deployment.timestamp).getUTCHours()).padStart(2, '0')}:{String(new Date(deployment.timestamp).getUTCMinutes()).padStart(2, '0')}</td>
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