import React from "react";
import { useAccount, useConnect, useDisconnect, useNetwork, useSwitchChain } from "@starknet-react/core";
import { constants } from "starknet";

function ConnectWallet() {
    const { address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { chain } = useNetwork();
    const { switchChain } = useSwitchChain({
        params: {
            chainId:
                chain?.id === constants.StarknetChainId.SN_SEPOLIA
                    ? constants.StarknetChainId.SN_MAIN
                    : constants.StarknetChainId.SN_SEPOLIA,
        },
    });

    const handleSwitchChain = async () => {
        try {
            console.log("Current chain:", chain);
            await switchChain();
            console.log("Switched chain successfully");
        } catch (error) {
            console.error("Error switching chain:", error);
        }
    };

    return (
        <div className="w-full h-full">
            <div className="font-medium absolute">
                {address ? (
                    <div className="mt-0">
                        <span>
                            {address.substring(0, 5) + "..." + address.substring(address.length - 5)}
                        </span>
                        <button onClick={() => disconnect()} className="font-bold tracking-wide p-2 pl-8 hover:cursor-pointer text-red-400 hover:text-red-600">
                            Disconnect
                        </button>
                        <button onClick={handleSwitchChain} >
                            Switch Chain
                        </button>
                    </div>
                ) : (
                    <span className="opacity-80 text-lg tracking-wide">Connect your wallet to begin</span>
                )}
            </div>
            {!address && (
                <div className="p-4 py-8 my-2 h-full flex justify-center items-center">
                    <div className="flex">
                        {connectors.map((connector) => (
                            <button
                                key={connector.id}
                                onClick={() => connect({ connector })}
                                disabled={!connector.available()}
                                className="p-3 m-2 bg-orange-600 hover:bg-orange-700 rounded text-lg"
                            >
                                Connect {connector.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConnectWallet;
