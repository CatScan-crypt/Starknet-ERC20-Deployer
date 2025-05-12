import React from "react";
import { useNetwork, useSwitchChain, useAccount } from "@starknet-react/core";
import { constants } from "starknet";

const sepolia = constants.StarknetChainId.SN_SEPOLIA;
const mainnet = constants.StarknetChainId.SN_MAIN;

function ConnectWallet() {
    const { chain } = useNetwork();
    const { switchChain } = useSwitchChain({
        params: {
            chainId: sepolia
        },
    });
    const { account } = useAccount(); 

    const handleSwitchChain = async () => {
        try {
            console.log("Current chain:", chain);
            if (chain.network === "mainnet") {
                switchChain({ chainId: sepolia });
            } else {
                switchChain({ chainId: mainnet });
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
                </>
            )}
        </div>
    );
}

export default ConnectWallet;