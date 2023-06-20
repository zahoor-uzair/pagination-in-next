import React, { useState } from "react";
interface TooltipProps {
  title: string;
  color?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, color, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isOpen && (
        <div className={`tooltip-content ${color || "primaryclr"}`}>
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
