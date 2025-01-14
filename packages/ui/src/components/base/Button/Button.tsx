import React from "react";
import { button } from "./button.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  hasIcon?: boolean;
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "small",
  hasIcon = false,
  icon,
  ...props
}: IButtonProps) => {
  return (
    <button className={button({ variant, size: "large" })} {...props}>
      {hasIcon && icon}
      {children}
    </button>
  );
};
