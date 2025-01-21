import React from "react";
import { button } from "./button.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "smallest";
  hasIcon?: boolean;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  size = "small",
  hasIcon = false,
  icon,
  className,
  ...props
}: IButtonProps) => {
  return (
    <button className={`${button({ variant, size })} ${className}`} {...props}>
      {hasIcon && icon}
      {children}
    </button>
  );
};

export default Button;