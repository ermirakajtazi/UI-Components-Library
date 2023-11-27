import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonSizes, ButtonTypes } from "../../enums";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  after?: ReactNode;
  before?: ReactNode;
  btnType?: ButtonTypes;
  btnSize?: ButtonSizes;
  buttonRef?: (instance: HTMLButtonElement) => void;
  isLoading?: boolean;
}
