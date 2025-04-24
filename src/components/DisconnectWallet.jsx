import React from "react";
import { useAccount, useDisconnect} from "@starknet-react/core";


function ConnectWallet() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();

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
                    </div>
                ) : (
                    <span className="opacity-80 text-lg tracking-wide"></span>
                )}
            </div>
        </div>
    );
}

export default ConnectWallet;