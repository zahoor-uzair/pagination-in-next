import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setvalue] = useState("");

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    // onChange(optionValue);
    setvalue(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`select ${isOpen ? "open" : ""}`}>
      <div className="select-toggle" onClick={handleToggle}>
        {!value && "Select"}
        {options.find((option) => option.value === value)?.label}
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`select-option ${
                option.value === value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
