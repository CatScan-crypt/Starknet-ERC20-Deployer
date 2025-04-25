import React from 'react';
import { useAccount } from '@starknet-react/core';
import WalletActions from './walletActions';

function Header({ handleSelect }) {
  const { account } = useAccount(); // Get account status

  return (
    <header className="header">
      <LogoTitleWrapper>
        <div className="header-logo-title">
          <img src="/logo.png" alt="Logo" className="header-logo" />
          <span className="header-title">ERC20 Deployer on Starknet</span>
        </div>
      </LogoTitleWrapper>
      <div className="wallet-actions">
        <WalletActions handleSelect={handleSelect} />
      </div>
    </header>
  );
}

function LogoTitleWrapper({ children }) {
  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      left: '10px',
      border: '1px solid black', 
      padding: '15px', 
      borderRadius: '25px', 
      backgroundColor: 'rgba(192, 192, 192, 0.25)'
    }}>
      {children}
    </div>
  );
}

export { Header, LogoTitleWrapper };