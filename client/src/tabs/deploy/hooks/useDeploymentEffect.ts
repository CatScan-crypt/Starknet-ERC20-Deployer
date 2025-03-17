import { useEffect } from "react";

interface DeploymentData {
  transaction_hash?: string;
}

const useDeploymentEffect = (
  data: DeploymentData | undefined,
  address: string | undefined,
  tokenName: string,
  tokenSymbol: string,
  initialSupply: number
) => {
  useEffect(() => {
    if (data?.transaction_hash && address) {
      const fetchContract = async () => {
        // Add a 30-second delay
        await new Promise(resolve => setTimeout(resolve, 30000));

        const options = {
          method: 'POST',
          headers: {accept: 'application/json', 'content-type': 'application/json'},
          body: JSON.stringify({
            id: 1,
            jsonrpc: '2.0',
            method: 'starknet_getTransactionReceipt',
            params: [data.transaction_hash]
          })
        };
        try {
          const response = await fetch('https://starknet-sepolia.public.blastapi.io', options);
          const res = await response.json();
          
          // Deployment successful, save to local storage
          const deploymentData = {
            timestamp: new Date().toISOString(),
            contractAddress: res.result.events[0].from_address, // Replace with actual contract address if available
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
        } catch (error) {
          console.error(error)
        }
      }
      fetchContract()
    }
  }, [data?.transaction_hash, tokenName, tokenSymbol, initialSupply, address]); // Add address to the dependency array
}

export default useDeploymentEffect