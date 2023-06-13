import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  onClick,
  className,
  style,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`custom-button ${className || "primary"}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
