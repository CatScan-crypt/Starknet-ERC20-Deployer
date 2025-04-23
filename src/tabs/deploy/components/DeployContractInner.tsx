// src/components/DeployContractInner.js

import React, { useState } from "react";
import useDeploymentEffect from "../hooks/useDeploymentEffect";
import { getCallData } from "../../../utils/getCallData"; // Importing the getCallData function
import {
  useAccount,
  useNetwork,
  useSendTransaction,
  useUniversalDeployerContract,
} from "@starknet-react/core";
import DeployContractInnerUI from "./DeployContractInnerUI"; // Importing the new UI component

export default function DeployContractInner() {
  const { address } = useAccount();
  const { chain } = useNetwork(); // Get the current network (mainnet or testnet)
  const { udc } = useUniversalDeployerContract();

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
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
    <DeployContractInnerUI
      data={data}
      isPending={isPending}
      isError={isError}
      error={error}
      tokenName={tokenName}
      setTokenName={setTokenName}
      tokenSymbol={tokenSymbol}
      setTokenSymbol={setTokenSymbol}
      initialSupply={initialSupply}
      setInitialSupply={setInitialSupply}

    />
  );
}

const classHash =
  "0x4cc8564546f31da0978311735c8d3f3ff2a2b36301dc2edd0785ee538fc6289";
