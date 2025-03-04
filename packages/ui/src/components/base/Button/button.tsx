import React from "react";
import { button } from "./button.css";
import type { IButtonProps } from "./button.interface";

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