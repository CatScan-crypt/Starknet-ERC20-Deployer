import React from "react";
import { useNetwork, useSwitchChain, useAccount } from "@starknet-react/core";
import { constants } from "starknet";

function ConnectWallet() {
    const { chain } = useNetwork();
    const { switchChain } = useSwitchChain({
        params: {
            chainId: constants.StarknetChainId.SN_SEPOLIA
        },
    });
    const { account } = useAccount(); // Check wallet connection

    const handleSwitchChain = async () => {
        try {
            console.log("Current chain:", chain);
            if (chain.network === "mainnet") {
                switchChain({ chainId: constants.StarknetChainId.SN_SEPOLIA });
            } else {
                switchChain({ chainId: constants.StarknetChainId.SN_MAIN });
            }
            console.log("Switched chain successfully");
        } catch (error) {
            console.error("Error switching chain:", error);
        }
    };

    return (
        <div className="w-full h-full">
            {account && (
                <>
                    <button onClick={handleSwitchChain}>
                        Switch Chain
                    </button>
                    <span className="ml-2 text-gray-600">Connected to: {chain?.network || "Unknown"}</span>
                </>
            )}
        </div>
    );
}

export default ConnectWallet;