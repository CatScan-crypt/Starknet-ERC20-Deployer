import React, { useState } from "react"
import {
    type Address,
    useAccount,
    useNetwork,
    useSendTransaction,
    useSwitchChain,
    useUniversalDeployerContract,
  } from "@starknet-react/core";
  import stringify from "safe-stable-stringify";
  import { constants, CallData } from "starknet";
  import { erc20ClassAbi } from "../../../components/erc20_class_abi";
  
  export default function DeployContractInner() {
    const { address } = useAccount();
    const { chain } = useNetwork();
    const { error: switchChainError, switchChainAsync } = useSwitchChain({
      params: {

        chainId: constants.StarknetChainId.SN_SEPOLIA,
      },
    });
    const { udc } = useUniversalDeployerContract();

    const [tokenName, setTokenName] = useState("STARKNET REACT DEMO");
    const [tokenSymbol, setTokenSymbol] = useState("SRD");
  
    const { isError, error, send, data, isPending } = useSendTransaction({
      calls:
        udc && address
          ? [
              udc.populate("deploy_contract", [
                classHash,
                23,
                false,
                getCallData(address, tokenName, tokenSymbol),
              ]),
            ]
          : undefined,
    });
  
    return (
      <div className="flex flex-col gap-4">
        {chain.id === BigInt(constants.StarknetChainId.SN_SEPOLIA) ? (
          <>
            <label>
              Token Name:
              <input
                type="text"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <label>
              Token Symbol:
              <input
                type="text"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <p>Response</p>
            <pre>
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
            <button onClick={() => send()} className="px-4 py-2 bg-blue-500 text-white rounded">
              Deploy Contract
            </button>
          </>
        ) : (
          <>
            <p>You need to switch to Sepolia to test this demo to deploy a contract</p>
            {switchChainError && (
              <p className="text-red-500">
                {switchChainError.message}, Try switching to Sepolia Manually!
              </p>
            )}
            <button
              onClick={async () => await switchChainAsync()}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Switch to Sepolia
            </button>
          </>
        )}
      </div>
    );
  }
  
  // https://sepolia.starkscan.co/class/0x07f3777c99f3700505ea966676aac4a0d692c2a9f5e667f4c606b51ca1dd3420
  const classHash =
    "0x07f3777c99f3700505ea966676aac4a0d692c2a9f5e667f4c606b51ca1dd3420";
  
  function getCallData(address: Address, name: string, symbol: string) {
    const calldata = new CallData(erc20ClassAbi).compile("constructor", {
      name: name,
      symbol: symbol,
      decimals: 18n,
      initial_supply: { low: 10n ** 18n * 1000000n, high: 0n },
      recipient: address,
      permitted_minter: address,
      provisional_governance_admin: address,
      upgrade_delay: 0n,
    });
    return calldata;
  }
  