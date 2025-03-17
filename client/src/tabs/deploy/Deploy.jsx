import React, { useState } from 'react';
import DeployContractInner from './components/DeployContractInner'

function Deploy() {
  return (
    <div style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '20px' }}>
      <DeployContractInner/>
    </div>
  );
}
export default Deploy;