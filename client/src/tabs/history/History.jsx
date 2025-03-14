import React from 'react';
import DeploymentHistoryTable from './components/DeploymentHistoryTable';

function History() {
  const deployments = [
    {
      timestamp: '2024-07-24 10:00:00',
      contractAddress: '0x1234567890abcdef',
      status: 'Success',
      transactionHash: '0xabcdef1234567890',
    },
    {
      timestamp: '2024-07-24 11:00:00',
      contractAddress: '0x0987654321fedcba',
      status: 'Failed',
      transactionHash: '0xbafedc0987654321',
    },
  ];

  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>History Page</h1>
      <DeploymentHistoryTable deployments={deployments} />
    </div>
  );
}

export default History;