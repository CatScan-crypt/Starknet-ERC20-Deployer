import React, { useState } from 'react';
import DeployTable from './components/DeployTable';

import useNetworkConfig from './hooks/useNetworkConfig';

function Deploy() {
  const networkConfig = useNetworkConfig();

  return (
    <DeployTable networkConfig={networkConfig} />
  );
}

export default Deploy;

