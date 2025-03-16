import React, { useState } from 'react';
import DeployContractInner from './components/DeployContractInner'


function Deploy() {


  return (

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      
      <DeployContractInner/>
    </div>

  );
}

export default Deploy;