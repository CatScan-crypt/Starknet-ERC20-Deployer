import React from 'react';
import { shortenAddress, copyToClipboard } from '../hooks/useDeploymentHistory'; 
import { ExplorerLinks } from './UIComponents'; 

const DeploymentRowLinks = ({ deployment, voyagerBaseUrl, starkscanBaseUrl }) => {
  return (
    <>
      <td
        style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          copyToClipboard(deployment.contractAddress);
        }}
        title="Click to copy"
      >
        {shortenAddress(deployment.contractAddress)}
        <img 
          src="/public/copyIcon.png" 
          alt="Copy" 
          style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(deployment.contractAddress);
          }}
        />
        <ExplorerLinks 
          voyagerUrl={`${voyagerBaseUrl}${deployment.contractAddress}`} 
          starkscanUrl={`${starkscanBaseUrl}${deployment.contractAddress}`} 
        />
      </td>
      <td style={{ border: '1px solid black', padding: '8px' }}>{deployment.status}</td>
      <td
        style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          copyToClipboard(deployment.transactionHash);
        }}
        title="Click to copy"
      >
        {shortenAddress(deployment.transactionHash)}
        <img 
          src="/public/copyIcon.png" 
          alt="Copy" 
          style={{ marginLeft: '8px', cursor: 'pointer', width: '16px', height: '16px' }}
          onClick={(e) => {
            e.stopPropagation();
            copyToClipboard(deployment.transactionHash);
          }}
        />
        <ExplorerLinks 
          voyagerUrl={`${voyagerBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} 
          starkscanUrl={`${starkscanBaseUrl.replace('contract', 'tx')}${deployment.transactionHash}`} 
        />
      </td>
    </>
  );
};

export default DeploymentRowLinks;
