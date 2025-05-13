export const handleClearData = (address) => {
  if (window.confirm('Are you sure you want to clear all local data?')) {
    localStorage.removeItem('deploymentHistory');
    localStorage.removeItem('walletConnection');
    if (address) {
      const key = `deployments_${address}`;
      localStorage.removeItem(key);
    }
    alert('Local data cleared successfully!');
  }
};
