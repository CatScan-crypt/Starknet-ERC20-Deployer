import React, { useState } from 'react';
import DeployContractInner from './components/DeployContractInner'

function Deploy() {
  console.log('Deploy component loaded');
  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <DeployContractInner/>
    </div>
  );
}
export default Deploy;