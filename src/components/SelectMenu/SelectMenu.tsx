import React from "react";
import { ISelectMenu } from "./SelectMenu.types";
import "./SelectMenu.scss";
import cx from "classnames";
export const SelectMenu = ({
  options,
  label,
  error,
  className,
  register,
  labelClassName,
  defaultValue,
  selectType = "default",
  disabled,
  selectSizes,
  data,
  ...props
}: ISelectMenu) => (
  <div className='selectContainer'>
    <label className='select-label'>{label}</label>
    <select
      className={cx("select", {
        [`select--${selectType}`]: selectType,
        [`select--${selectSizes}`]: selectSizes,
        [`${className}`]: className,
      })}
      data-test-id={label}
      {...{ ...register, ...props }}
      disabled={disabled}
    >
      {options
        ? options?.map(({ value, label: labelText }) => (
            <option key={value} value={value}>
              {labelText}
            </option>
          ))
        : data?.map((item) => (
            <option key={`${item.item}-${item.id}`} value={item.item}>
              {item.item}
            </option>
          ))}
    </select>
    {error && (
      <span className={cx("errorMessage")} data-test='error-input'>
        {error}
      </span>
    )}
  </div>
);
