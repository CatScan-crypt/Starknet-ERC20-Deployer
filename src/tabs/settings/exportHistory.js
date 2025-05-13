export const handleExportHistory = (address) => {
  if (address) {
    const key = `deployments_${address}`;
    const storedDeployments = localStorage.getItem(key);
    if (storedDeployments) {
      const blob = new Blob([storedDeployments], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `deployment_history_${address}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert('No deployment history found to export.');
    }
  } else {
    alert('Please connect your wallet to export history.');
  }
};

export const handleExportHistoryAsCSV = (address) => {
  if (address) {
    const key = `deployments_${address}`;
    const storedDeployments = localStorage.getItem(key);
    if (storedDeployments) {
      const deployments = JSON.parse(storedDeployments);
      const headers = Object.keys(deployments[0] || {}).join(',');
      const rows = deployments.map(deployment => Object.values(deployment).join(','));
      const csvContent = [headers, ...rows].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `deployment_history_${address}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert('No deployment history found to export.');
    }
  } else {
    alert('Please connect your wallet to export history.');
  }
};

export const handleExportHistoryAsTXT = (address) => {
  if (address) {
    const key = `deployments_${address}`;
    const storedDeployments = localStorage.getItem(key);
    if (storedDeployments) {
      const blob = new Blob([storedDeployments], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `deployment_history_${address}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert('No deployment history found to export.');
    }
  } else {
    alert('Please connect your wallet to export history.');
  }
};
