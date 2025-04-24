import React from 'react';
import {
  type Connector,
  useAccount,
  useConnect,
  useNetwork,
} from "@starknet-react/core";
import {
  type StarknetkitConnector,
  useStarknetkitConnectModal,
} from "starknetkit";
import { availableConnectors } from "./starknetkit/index";
import { Button } from "./ui/button";

export function StarknetKit() {
  return (
    <StarknetKitInner />
  );
}

function StarknetKitInner() {
  const { connectAsync, connectors } = useConnect();
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: availableConnectors as StarknetkitConnector[],
  });

  const { address, chainId, account } = useAccount();

  // function to connect to a wallet via starknetkit modal
  async function connectWalletWithModal() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) {
      return;
    }
    await connectAsync({ connector: connector as Connector });
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {address && (
          <div className="h-full flex flex-col justify-center">

          </div>
        )}

        <Button onClick={connectWalletWithModal}>Starknetkit Modal</Button>
      </div>
    </div>
  );
}


export function useConnectWalletWithModal() {
  const { connectAsync } = useConnect();

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: availableConnectors as unknown as StarknetkitConnector[], // workaround if needed
  });

  async function connectWalletWithModal() {
    const { connector } = await starknetkitConnectModal();
    if (!connector) return;
    await connectAsync({ connector: connector as Connector });
  }

  return { connectWalletWithModal };
}