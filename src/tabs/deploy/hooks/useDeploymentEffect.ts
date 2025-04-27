import { useEffect } from "react";
import { useNetwork } from "@starknet-react/core";

interface DeploymentData {
  transaction_hash?: string;
}

const useDeploymentEffect = (
  data: DeploymentData | undefined,
  address: string | undefined,
  tokenName: string,
  tokenSymbol: string,
  initialSupply: number,
  isSuccess: boolean,
  isError: boolean
) => {
  const { chain } = useNetwork();

  useEffect(() => {
    console.log("useDeploymentEffect triggered");
    const key = `deployments_${address}`; // Use wallet address as part of the key
    const storedDeployments = localStorage.getItem(key);
    const deployments = storedDeployments ? JSON.parse(storedDeployments) : [];

    const deploymentData = {
      timestamp: new Date().toISOString(),
      contractAddress: "N/A",
      status: isError ? "Fail" : isSuccess ? "Success" : "Pending",
      transactionHash: data?.transaction_hash || "Unknown",
      tokenName: tokenName,
      tokenSymbol: tokenSymbol,
      initialSupply: initialSupply,
    };

    if (isError) {
      // Save failed deployment immediately
      deployments.push(deploymentData);
      localStorage.setItem(key, JSON.stringify(deployments));
      console.log("Stored deployments:", deployments);
      return;
    }

    if (data?.transaction_hash && address) {
      const fetchContract = async () => {
        console.log("Fetching contract data...");
        await new Promise(resolve => setTimeout(resolve, 20000));

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
          const baseUrl = chain?.network === "mainnet" ? 'https://starknet-mainnet.public.blastapi.io' :'https://starknet-sepolia.public.blastapi.io';
          const response = await fetch(baseUrl, options);
          const res = await response.json();

          // Update contract address if successful
          if (!isError) {
            console.log("Transaction receipt fetched successfully:", res);
            deploymentData.contractAddress = res.result?.events?.[0]?.from_address || "Unknown";
            deploymentData.status = "Success";
          }
        } catch (error) {
          console.error(error);
        } finally {
          // Add the deployment data to the array
          deployments.push(deploymentData);

          // Save the updated array back to local storage
          localStorage.setItem(key, JSON.stringify(deployments));

          // Log stored deployments
          console.log("Stored deployments:", deployments);
        }
      }
      fetchContract();
    }
  }, [data?.transaction_hash, tokenName, tokenSymbol, initialSupply, address, isSuccess, isError]);
}

export default useDeploymentEffect