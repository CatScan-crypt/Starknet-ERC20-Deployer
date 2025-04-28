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

export const shortenAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 7) + "...." + address.slice(-4);
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

export default useDeploymentHistory;