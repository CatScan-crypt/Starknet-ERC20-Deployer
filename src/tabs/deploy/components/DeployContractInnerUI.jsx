// src/components/DeployContractInnerUI.js

import React from 'react';
import DeploymentTable from './DeploymentTable';
import stringify from 'safe-stable-stringify';

const DeployContractInnerUI = ({
  data,
  isPending,
  isError,
  error,
  tokenName,
  setTokenName,
  tokenSymbol,
  setTokenSymbol,
  initialSupply,
  setInitialSupply,
  send
}) => {
  // Calculate form validity
  const isFormValid = tokenName.trim() !== '' && tokenSymbol.trim() !== '' && initialSupply > 0;

  const handleDeploy = () => {
    send()
      .then(() => {
        // Handle success logic here
      })
      .catch(() => {
        // Handle error logic here
      });
  };

  return (
    <div className="flex gap-6"> {/* Flex container to hold both sides */}
      {/* Deployment table with input fields on the right */}
      <div className="flex-1"> {/* Takes up remaining space on the right */}
        <DeploymentTable 
          tokenName={tokenName} 
          tokenSymbol={tokenSymbol} 
          send={handleDeploy}
          isFormValid={isFormValid} // Pass validity status
        >
          <input
            type="text"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            placeholder="e.g., MyToken"
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            placeholder="e.g., TST"
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="number"
            value={initialSupply}
            onChange={(e) => setInitialSupply(parseInt(e.target.value))}
            placeholder="Enter initial supply"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />          
        </DeploymentTable>  
      </div>  
    </div>
  );
}

export default DeployContractInnerUI;
