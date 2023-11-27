import { ButtonHTMLAttributes } from "react";

export interface RadioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
  isSelected: boolean;
  onChange: () => void;
  value: string;
  isDisabled?: boolean;
}
