import React from 'react';
import { useAccount, useNetwork } from '@starknet-react/core';
import DisconnectWallet from './DisconnectWallet';
import SwitchChain from './SwitchChain';
import { StarknetKit } from './starknetkit';
import Dropdown from './ui/dropdown';
import argentLogo from '../../public/argent.png';
import braavosLogo from '../../public/braavos.png';


function WalletActions({ handleSelect }) {
  const { address, account } = useAccount(); 
  const { chain } = useNetwork();

  const getWalletIcon = () => {
    if (account?.walletProvider?.id === 'argentX') {
      return <img src={argentLogo} 
      style={{ width: '25px', height: '25px' }}
      alt="Argent" className="wallet-icon" 
        
      />;
    } else if (account?.walletProvider?.id === 'braavos') {
      return <img src={braavosLogo} 
      style={{ width: '25px', height: '25px' }}
      alt="Braavos" className="wallet-icon" />;
    }
    return null;
  };

  const getNetworkName = () => {
    if (chain?.name === 'Starknet Sepolia Testnet') {
      return 'Testnet';
    }
    return 'Mainnet';
  };

  const options = [
    <div key="starknetkit"><StarknetKit /></div>,
  ];

  if (account) {
    options.push(<div key="disconnect"><DisconnectWallet /></div>);
    options.push(<div key="switchchain"><SwitchChain /></div>);
  }

  return (
    <div className="wallet-actions">
      <Dropdown
        title={
          address ? (
            <div className="dropdown-title">
              <div className="dropdown-title-content">
                {`${address.slice(0, 4)}...${address.slice(-3)}`} {getWalletIcon()} {getNetworkName()}
              </div>
            </div>
          ) : "No Connected Wallet"
        }
        options={options} 
        onSelect={handleSelect}
      />
    </div>
  );
}

export default WalletActions;