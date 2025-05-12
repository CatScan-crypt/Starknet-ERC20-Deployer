import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({ type, message, onClose }) => {
  return (
    <div className={`alert-message ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-button">&times;</button>
    </div>
  );
};

export default AlertMessage;
