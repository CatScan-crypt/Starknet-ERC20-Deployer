import { useState, useEffect } from 'react';
import { useAccount, useNetwork } from "@starknet-react/core";

const useDeploymentHistory = () => {
  const [deployments, setDeployments] = useState([]);
  const { address } = useAccount();
  const { chain } = useNetwork();

  useEffect(() => {
    if (address) {
      const key = `deployments_${address}`;
      const storedDeployments = localStorage.getItem(key);
      if (storedDeployments) {
        setDeployments(JSON.parse(storedDeployments));
      }
    }
  }, [address]);

  return { deployments, chain };
};

export default useDeploymentHistory;