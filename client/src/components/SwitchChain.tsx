import React from "react";
import { useNetwork, useSwitchChain } from "@starknet-react/core";
import { constants } from "starknet";

function ConnectWallet() {
    const { chain } = useNetwork();
    const { switchChain } = useSwitchChain({
        params: {
            chainId: constants.StarknetChainId.SN_SEPOLIA
        },
    });

    const handleSwitchChain = async () => {
        try {
            console.log("Current chain:", chain.network);
            if(chain.network === "mainnet"){
             switchChain({ chainId: constants.StarknetChainId.SN_SEPOLIA });
            }else{
                switchChain({ chainId: constants.StarknetChainId.SN_MAIN });
            }
            console.log("Switched chain successfully");
        } catch (error) {
            console.error("Error switching chain:", error);
        }
    };
    return (
        <div className="w-full h-full">
            <button onClick={handleSwitchChain} >
                Switch Chain
            </button>
            
        </div>
    );
}

export default ConnectWallet;