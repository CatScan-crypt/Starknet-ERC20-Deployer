import React, { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { useConnectWalletWithModal } from "../../../components/starknetkit.tsx"; 
import "../../../styles/DeploymentTable.css";

interface DeploymentTableProps {
  tokenName: string;
  tokenSymbol: string;
  children: React.ReactNode;
  send: () => void;
  isFormValid: boolean;
}

const DeploymentTable: React.FC<DeploymentTableProps> = ({ children, send, isFormValid }) => {
  const { account } = useAccount();
  const { connectWalletWithModal } = useConnectWalletWithModal(); 
  const [showMessage, setShowMessage] = useState(false);

  const handleCheckForm = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="deployment-table-container">
      <h3 className="text-lg font-semibold">Deployment Information</h3>
      <div className="mt-2">
        {React.Children.count(children) === 3 ? (
          <table>
            <tbody>
              <tr>
                <td className="font-medium">Token Name:</td>
                <td>{React.Children.toArray(children)[0]}</td>
              </tr>
              <tr>
                <td className="font-medium">Token Symbol:</td>
                <td>{React.Children.toArray(children)[1]}</td>
              </tr>
              <tr>
                <td className="font-medium">Initial Supply:</td>
                <td>{React.Children.toArray(children)[2]}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Error: Please provide Token Name, Token Symbol and Initial Supply inputs.</p>
        )}

        {account && isFormValid && (
          <button 
            onClick={() => send()} 
            className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-700"
            title="Deploy Contract"
          >
            Deploy Contract
          </button>
        )} 

        {account && !isFormValid && (
          <>
            <button
              className="px-4 py-2 text-gray-500 bg-yellow-500 rounded hover:bg-yellow-700 mt-2"
              style={{ color: 'gray' }}
              title="Please ensure all fields are correctly filled before deploying."
              onClick={handleCheckForm}
            >
              Check Form
            </button>
            <p
              className="mt-2 text-red-500"
              style={{
                visibility: showMessage ? "visible" : "hidden",
                height: "1em", // Reserve space for the message
              }}
            >
              Please review the form fields for accuracy.
            </p>
          </>
        )}

        {!account && (
          <button
            onClick={connectWalletWithModal}
            className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 mt-2"
            title="Connect your wallet to proceed."
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default DeploymentTable;