import React from 'react';
import DeploymentHistoryTable from './components/DeploymentHistoryTable';
function History() {
  const deployments = [];
  return (
    <div style={{ 
      backgroundColor: 'grey', 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'center' }}>
      <h1>History Page</h1>
      <DeploymentHistoryTable deployments={deployments} />
    </div>
  );
}
export default History;