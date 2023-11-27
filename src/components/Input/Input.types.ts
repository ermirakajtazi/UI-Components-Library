import { InputHTMLAttributes } from "react";
import { InputSizes, InputTypes } from "../../enums";
import { UseFormRegisterReturn } from "react-hook-form";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: (instance: HTMLInputElement) => void;
  inputType?: InputTypes;
  inputSize?: InputSizes;
  register?: UseFormRegisterReturn;
  label?: string;
  classNameLabel?: string;
  required?: boolean;
  type?: string;
  placeHolder?: string;
  className: string;
  error?: string;
}
