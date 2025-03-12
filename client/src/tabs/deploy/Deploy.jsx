import React, { useState } from 'react';
import DeployTable from './components/DeployTable';

import useNetworkConfig from './hooks/useNetworkConfig';

function Deploy() {
  const { networkConfig, handleUpdate } = useNetworkConfig();

  return (
    <DeployTable networkConfig={networkConfig} handleUpdate={handleUpdate} />
  );
}

export default Deploy;

