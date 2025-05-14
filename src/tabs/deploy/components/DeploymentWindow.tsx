import React from "react";

interface DeploymentWindowProps {
  children: React.ReactNode;
  button?: React.ReactNode;
}

const DeploymentWindow: React.FC<DeploymentWindowProps> = ({ children, button }) => {
  return (
    <div className="deployment-window-container" style={{
      border: "2px solid #e5e7eb",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      padding: "2rem",
      marginTop: "2rem",
      background: "black"
    }}>
      <h2 className="text-xl font-bold mb-4">Deploy ERC20 Token</h2>
      {children}
      {button && <div className="mt-4">{button}</div>}
    </div>
  );
};

export default DeploymentWindow;
