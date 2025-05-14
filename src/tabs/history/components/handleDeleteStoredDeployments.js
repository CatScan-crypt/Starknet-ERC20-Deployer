// Utility function to delete selected deployments from localStorage
// Used by DeploymentHistoryTable.jsx
export const handleDeleteStoredDeployments = ({ address, selectedRows, setLocalDeployments, setSelectedRows, setAlert }) => {
  if (!address) {
    console.log('No address found.');
    return;
  }
  const key = `deployments_${address}`;
  const storedDeployments = localStorage.getItem(key);
  if (storedDeployments) {
    let allDeployments = JSON.parse(storedDeployments);
    if (selectedRows.length > 0) {
      const updatedDeployments = allDeployments.filter((_, idx) => !selectedRows.includes(idx));
      localStorage.setItem(key, JSON.stringify(updatedDeployments));
      setLocalDeployments(updatedDeployments); 
      setSelectedRows([]);
      setAlert({ visible: true, type: 'success', message: 'Selected deployments deleted.' });
      setTimeout(() => setAlert({ visible: false, type: '', message: '' }), 3000);
    }
  }
};
