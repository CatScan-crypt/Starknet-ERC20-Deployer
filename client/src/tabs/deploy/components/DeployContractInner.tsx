// src/components/DeployContractInner.js

import React, { useState } from "react";
import useDeploymentEffect from "../hooks/useDeploymentEffect";
import { getCallData } from "../../../utils/getCallData"; // Importing the getCallData function

import {
  type Address,
  useAccount,
  useNetwork,
  useSendTransaction,
  useUniversalDeployerContract,
} from "@starknet-react/core";
import stringify from "safe-stable-stringify";
import { constants } from "starknet";
import DeploymentTable from "./DeploymentTable";

export default function DeployContractInner() {
  const { address } = useAccount();
  const { chain } = useNetwork(); // Get the current network (mainnet or testnet)
  const { udc } = useUniversalDeployerContract();

  const [tokenName, setTokenName] = useState("STARKNET REACT DEMO");
  const [tokenSymbol, setTokenSymbol] = useState("SRD");
  const [initialSupply, setInitialSupply] = useState(1000000);

  const { isError, error, send, data, isPending } = useSendTransaction({
    calls:
      udc && address
        ? [
            udc.populate("deploy_contract", [
              classHash,
              23,
              false,
              getCallData(address, tokenName, tokenSymbol, initialSupply), // Using the imported getCallData function
            ]),
          ]
        : undefined,
  });

  // Use the custom hook here to handle deployment data effects
  useDeploymentEffect(data, address, tokenName, tokenSymbol, initialSupply);

  return (
    <div className="flex gap-6"> {/* Flex container to hold both sides */}
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          {stringify(
            {
              data,
              isPending,
              isError,
              error: error?.message,
            },
            null,
            2
          )}
        </pre>
      {/* Deployment table with input fields on the right */}
      <div className="flex-1"> {/* Takes up remaining space on the right */}

        <DeploymentTable tokenName={tokenName} tokenSymbol={tokenSymbol} send={send}>
          <input
            type="text"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="text"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
          />
          <input
            type="number"
            value={initialSupply}
            onChange={(e) => setInitialSupply(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />          
        </DeploymentTable>  
      </div>  
    </div>
  );
}

const classHash =
  "0x07f3777c99f3700505ea966676aac4a0d692c2a9f5e667f4c606b51ca1dd3420";
