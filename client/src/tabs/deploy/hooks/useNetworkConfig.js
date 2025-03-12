// /src/hooks/useNetworkConfig.js

import { useState, useEffect, useRef } from 'react';

const useNetworkConfig = () => {
  const [networkConfig, setNetworkConfig] = useState({});
  const initialConfig = useRef(null);

  useEffect(() => {
    const fetchNetworkConfig = async () => {
      const options = [
        "DEPLOYER_PRIVATE_KEY",
        "DEPLOYER_ADDRESS",
        "NETWORK",
        "RPC_ENDPOINT_SEPOLIA",
        "RPC_ENDPOINT_MAINNET",
        "TOKEN_NAME",
        "SYMBOL_NAME",
        "DECIMALS_LENGTH",
        "FIXED_SUPPLY"
      ];

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
          config[option] = results[index].output;
        });
        setNetworkConfig(config);
        initialConfig.current = config;
      } catch (error) {
        console.error('Error fetching network config:', error);
        setNetworkConfig({ error: error.message });
        initialConfig.current = null;
      }
    };

    fetchNetworkConfig();
  }, []);

  const handleUpdate = async (newConfig) => {
    if (!initialConfig.current) {
      console.log("No initial configuration to compare against.");
      return;
    }

    let changesMade = false;
    for (const key in newConfig) {
      if (newConfig[key] !== initialConfig.current[key]) {
        console.log(`Value changed for: ${key}.  New value: ${newConfig[key]}`);
        changesMade = true;

        try {
          const response = await fetch(`http://localhost:3001/configure?m=set&o=${key}=${newConfig[key]}`, {
            method: 'POST',
          });

          if (!response.ok) {
            console.error(`Failed to update ${key} on the server.`);
          }
        } catch (error) {
          console.error(`Error updating ${key} on the server:`, error);
        }
      }
    }

    if (!changesMade) {
      console.log("No changes made.");
    } else {
      initialConfig.current = { ...newConfig };
    }
  };

  return { networkConfig, handleUpdate };
};

export default useNetworkConfig;
