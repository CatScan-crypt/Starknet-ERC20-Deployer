import React from "react";
interface DeploymentTableProps {
  tokenName: string;
  tokenSymbol: string;
  children: React.ReactNode;
  send: () => void;
  isFormValid: boolean; // Add isFormValid prop
}

const DeploymentTable: React.FC<DeploymentTableProps> = ({ children, send, isFormValid }) => {
  return (
    <div className="border border-gray-300 rounded p-4" style={{ backgroundColor: 'grey', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '20px' }}>
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
        <button 
          onClick={() => send()} 
          className={`px-4 py-2 text-white rounded ${isFormValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          disabled={!isFormValid} // Disable button based on isFormValid
          title={!isFormValid ? "Please fill in all required fields (Token Name, Token Symbol, Initial Supply > 0)" : "Deploy Contract"} // Add tooltip
        >
          Deploy Contract
        </button>
        
      </div>

    </div>
    
  );
};

export default DeploymentTable;