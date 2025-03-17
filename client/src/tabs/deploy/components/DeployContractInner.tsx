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
import { constants } from "starknet";
import DeployContractInnerUI from "./DeployContractInnerUI"; // Importing the new UI component

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
      send={send}
    />
  );
}

const classHash =
  "0x07f3777c99f3700505ea966676aac4a0d692c2a9f5e667f4c606b51ca1dd3420";
