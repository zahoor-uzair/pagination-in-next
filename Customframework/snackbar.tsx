import React, { useState, useEffect } from "react";

interface SnackbarProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const timer = setTimeout(() => {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={`snackbar ${isOpen ? "open" : ""}`}>
      <div className="snackbar-content">{message}</div>
    </div>
  );
};

export default Snackbar;
