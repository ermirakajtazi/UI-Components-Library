import { InputHTMLAttributes } from "react";
import { TextFieldSizes, TextFieldTypes } from "../../enums";
import { UseFormRegisterReturn } from "react-hook-form";
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  textFieldType: TextFieldTypes;
  label?: string;
  register?: UseFormRegisterReturn;
  isDisabled?: boolean;
  placeholder?: string;
  error?: string;
  type?: string;
  id?: string;
  required?: boolean;
  textFieldSizes?: TextFieldSizes
}
