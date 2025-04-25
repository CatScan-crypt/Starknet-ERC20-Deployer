import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/CatScan-crypt/Starknet-ERC20-Deployer" target="_blank" rel="noopener noreferrer">
          <img src="/GitHub.png" alt="GitHub" width="24" height="24" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.linkedin.com/in/marian-roth/" target="_blank" rel="noopener noreferrer">
          <img src="/LinkedIn.png" alt="LinkedIn" width="24" height="24" style={{ marginRight: '10px' }} />
        </a>
        <a href="https://t.me/Cat2can" target="_blank" rel="noopener noreferrer">
          <img src="/Telegram.png" alt="Telegram" width="24" height="24" />
        </a>
        <a href="https://app.onlydust.com/projects/erc20-deployer-on-starknet" target="_blank" rel="noopener noreferrer">
          <img src="/OnlyDust.png" alt="Telegram" width="24" height="24" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;