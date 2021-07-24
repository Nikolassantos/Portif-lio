import { ButtonHTMLAttributes } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  link?: string;
  children?: JSX.Element;
}
