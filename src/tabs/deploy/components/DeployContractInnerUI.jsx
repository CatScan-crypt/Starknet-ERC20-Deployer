// src/components/DeployContractInnerUI.js

import React, { useState, useEffect } from 'react';
import DeploymentTable from './DeploymentTable';

const DeployContractInnerUI = ({
  isSuccess,
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
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (data) {
      console.log('Data after request:', data);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isError]);

  const isFormValid = tokenName.trim() !== '' && tokenSymbol.trim() !== '' && initialSupply > 0;

  const handleDeploy = () => {
    send();
  };

  return (
    <div className="flex gap-6"> 
      <div className="flex-1">
        {isPending && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">Waiting for user approval</div>
          </div>
        )}
        {showSuccess && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow text-green-600">
              Deployment was successful!
            </div>
          </div>
        )}
        {showError && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-red-500 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow text-red-600">
              {error?.reason || error?.message || 'An unknown error occurred'}
            </div>
          </div>
        )}
        <DeploymentTable 
          tokenName={tokenName} 
          tokenSymbol={tokenSymbol} 
          send={handleDeploy}
          isFormValid={isFormValid} 
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
