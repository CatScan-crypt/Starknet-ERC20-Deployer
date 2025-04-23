import React, { useState } from 'react';
import './dropdown.css';

interface DropdownProps {
  title: string;
  options: React.ReactNode[];
  onSelect: (option: React.ReactNode) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: React.ReactNode) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-title" onClick={toggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;