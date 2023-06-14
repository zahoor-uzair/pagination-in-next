import React, { useState } from "react";

interface AlertProps {
  severity: "success" | "error" | "warning" | "info";

  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ severity, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`alert alert-${severity}`}>
      <div className="alert-content">{children}</div>
      <div className="alert-close" onClick={handleClose}>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default Alert;
