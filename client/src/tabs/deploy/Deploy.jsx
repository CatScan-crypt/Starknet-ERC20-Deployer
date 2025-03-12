import React, { useState, useEffect } from 'react';
import DeployTable from './components/DeployTable';

function Deploy() {
  const [networkConfig, setNetworkConfig] = useState({});

  useEffect(() => {
    const fetchNetworkConfig = async () => {
      const options = ["DEPLOYER_PRIVATE_KEY", "DEPLOYER_ADDRESS", "NETWORK", "RPC_ENDPOINT_SEPOLIA", "RPC_ENDPOINT_MAINNET", "TOKEN_NAME", "SYMBOL_NAME", "DECIMALS_LENGTH", "FIXED_SUPPLY"];
      try {
        const results = await Promise.all(
          options.map(option =>
            fetch(`http://localhost:3001/configure?m=get&o=${option}`, {
              method: 'POST',
            }).then(response => response.json())
          )
        );

        const config = {};
        options.forEach((option, index) => {
          config[option] = results[index].output
        });
        setNetworkConfig(config);
      } catch (error) {
        console.error('Error fetching network config:', error);
        setNetworkConfig({ error: error.message });
      }
    };

    fetchNetworkConfig();
  }, []);

  return (
    <DeployTable networkConfig={networkConfig} />
  );
}

export default Deploy;