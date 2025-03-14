import React from 'react';

const DeploymentHistoryTable = ({ deployments }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '80%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Timestamp</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Contract Address</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Transaction Hash</th>
        </tr>
      </thead>
      <tbody>
        {deployments.map((deployment, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.timestamp}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.contractAddress}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.status}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.transactionHash}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DeploymentHistoryTable;