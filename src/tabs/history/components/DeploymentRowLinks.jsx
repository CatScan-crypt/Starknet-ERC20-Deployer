import { shortenAddress, copyToClipboard } from '../hooks/useDeploymentHistory'; 
import { ExplorerLinks } from './UIComponents'; 

const DeploymentRowLinks = ({ deployment, voyagerBaseUrl, starkscanBaseUrl, showAlert }) => {
  return (
    <>
      <td
        style={{ border: '1px solid black', padding: '8px', cursor: 'pointer' }}
        onClick={(e) => {
          e.stopPropagation();
          copyToClipboard(deployment.contractAddress);
          showAlert('success', 'Contract address copied to clipboard!');
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
            showAlert('success', 'Contract address copied to clipboard!');
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
          showAlert('success', 'Transaction hash copied to clipboard!')          
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
            showAlert('success', 'Transaction hash copied to clipboard!')
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
