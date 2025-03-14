import React, { useState } from 'react';
import DeploymentStatusWindow from "./components/DeploymentStatusWindow";
import DeployTable from './components/DeployTable';

import useNetworkConfig from './hooks/useNetworkConfig';

function Deploy() {
  const { networkConfig, handleUpdate } = useNetworkConfig();

  return (

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <DeployTable networkConfig={networkConfig} handleUpdate={handleUpdate} />
      <DeploymentStatusWindow/>
    </div>

  );
}

export default Deploy;