import React from 'react';
import { input, errorInput } from './input.css';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = ({ error, ...props }: InputProps) => {
  return <input className={error ? errorInput : input} {...props} />;
};
