import React from "react";
import { button } from "./button.css";
import { TButtonSize, TButtonVariant } from "./button.interface";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: TButtonVariant;
  size?: TButtonSize;
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