export type TButtonVariant = 'primary' | 'secondary' | 'warning' | 'none' | 'inputStyle';
export type TButtonSize = 'small' | 'medium' | 'large' | 'smallest' | 'xlarge';
export interface IButtonProps extends React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: TButtonVariant;
  size?: TButtonSize;
  hasIcon?: boolean;
  icon?: React.ReactNode;
}