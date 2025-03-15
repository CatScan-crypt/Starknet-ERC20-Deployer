
import { useNetwork, useSwitchChain } from "@starknet-react/core";
import stringify from "safe-stable-stringify";
import { constants } from "starknet";
import { sepolia } from "@starknet-react/chains";

export default function Settings() {
  const { chain } = useNetwork();
  const { isError, isPending, data, error, switchChain } = useSwitchChain({
    params: {
      chainId:
        chain?.id === sepolia.id
          ? constants.StarknetChainId.SN_MAIN
          : constants.StarknetChainId.SN_SEPOLIA,
    },
  });

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <p>Current Chain: {chain?.name}</p>

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

        <button onClick={() => switchChain()}>
          Switch Chain between Mainnet and Sepolia
        </button>
        <button
          onClick={() =>
            switchChain({ chainId: constants.StarknetChainId.SN_MAIN })
          }
        >
          Switch to Mainnet (Override)
        </button>
        <button
          onClick={() =>
            switchChain({ chainId: constants.StarknetChainId.SN_SEPOLIA })
          }
        >
          Switch to Sepolia (Override)
        </button>
      </div>
    </div>
  );
}