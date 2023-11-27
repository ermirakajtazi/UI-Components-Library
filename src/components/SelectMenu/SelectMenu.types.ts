import { SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { SelectMenuSizes, SelectTypes } from "../../enums";
export interface ISelectMenu extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: { label?: string | undefined; value?: string | undefined | number }[];
  register?: UseFormRegisterReturn;
  label?: string;
  labelClassName?: string;
  error?: string;
  className?: string;
  defaultValue?: string;
  value?: string | number;
  type?: string;
  selectType: SelectTypes;
  data?: IDataArray[];
  selectSizes?:SelectMenuSizes
}
interface IDataArray {
  id?: string;
  item?: string;
}
