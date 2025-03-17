// src/hooks/useDeploymentEffect.js

import { useEffect } from "react";

export default function useDeploymentEffect(data, address, tokenName, tokenSymbol, initialSupply) {
  useEffect(() => {
    if (data?.transaction_hash && address) {
      // Deployment successful, save to local storage
      const deploymentData = {
        timestamp: new Date().toISOString(),
        contractAddress: "TBD", // Replace with actual contract address if available
        status: "Success",
        transactionHash: data.transaction_hash,
        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        initialSupply: initialSupply,
      };

      // Get existing deployments from local storage
      const key = `deployments_${address}`; // Use wallet address as part of the key
      const storedDeployments = localStorage.getItem(key);
      const deployments = storedDeployments ? JSON.parse(storedDeployments) : [];

      // Add the new deployment to the array
      deployments.push(deploymentData);

      // Save the updated array back to local storage
      localStorage.setItem(key, JSON.stringify(deployments));
    }
  }, [data?.transaction_hash, tokenName, tokenSymbol, initialSupply, address]); // Add address to the dependency array
}
