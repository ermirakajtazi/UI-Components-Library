import { Control, FieldValues, Path } from "react-hook-form";
import { CheckboxTypes } from "../../enums";

export interface CheckboxProps<T extends FieldValues> {
  checkBoxType?: CheckboxTypes;
  control?: Control<T>;
  name: Path<T>;
  label?: string;
  isDisabled?: boolean;
  options?: {label:string,value:string}[]
}
