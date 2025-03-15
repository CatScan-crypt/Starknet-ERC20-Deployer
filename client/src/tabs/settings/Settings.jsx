import { useInjectedConnectors, argent, braavos, useSwitchChain } from "@starknet-react/core"; // Import required hooks
import { constants } from "starknet"; // Import constants for network IDs

export default function WalletConnectAndSwitch() {
  // Handle injected connectors
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  // Switch chain hook
  const { switchChain, error } = useSwitchChain({
    params: {
      chainId: constants.StarknetChainId.SN_SEPOLIA, // Default chain (can be changed dynamically)
    },
  });

  // Handle network switch to Sepolia
  const handleSwitchToSepolia = () => {
    switchChain({ chainId: constants.StarknetChainId.SN_SEPOLIA });
  };

  // Handle network switch to Mainnet
  const handleSwitchToMainnet = () => {
    switchChain({ chainId: constants.StarknetChainId.SN_MAIN });
  };

  return (
    <div>
      <h1>Connect Your Wallet and Switch Networks</h1>

      {/* Show connectors if no wallet is connected */}
      {connectors?.length > 0 ? (
        <div>
          <p>Please connect a wallet:</p>
          {connectors.map((connector, index) => (
            <button key={index} onClick={() => connector.connect()}>
              Connect with {connector.name}
            </button>
          ))}
        </div>
      ) : (
        <p>No connectors available.</p>
      )}

      {/* Show error if there is any */}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {/* Buttons to switch networks */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSwitchToSepolia}>Switch to Sepolia</button>
        <button onClick={handleSwitchToMainnet}>Switch to Mainnet</button>
      </div>
    </div>
  );
}
