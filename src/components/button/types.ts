import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
}
