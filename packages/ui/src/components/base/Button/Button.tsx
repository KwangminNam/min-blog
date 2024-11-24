import React from "react";
import { button } from "./button.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  variant = "primary",
  size = "small",
  ...props
}: IButtonProps) => {
  return (
    <button
      className={button({ variant: "warning", size: "large" })}
      {...props}
    >
      {children}
    </button>
  );
};
