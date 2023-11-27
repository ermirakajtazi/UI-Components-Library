import cx from "classnames";
import React, { FC } from "react";
import { TextFieldProps } from "./TextField.types";

const disabled = "opacity-50 hover:bg-indigo-100";

export const TextField: FC<TextFieldProps> = ({
  label,
  register,
  isDisabled = false,
  placeholder,
  error = "",
  type,
  id,
  textFieldType = "default",
  className = "",
  textFieldSizes = "sm",
  value,
  ...props
}) => {
  const propsAndRegister = { ...register, ...props };
  return (
    <div className={cx("textFieldContainer")}>
      <label className='label'>{label}</label>
      <input
        {...propsAndRegister}
        placeholder={placeholder}
        autoComplete='off'
        disabled={isDisabled}
        id={id}
        type={type}
        className={cx("textField", {
          [`textField--${textFieldType}`]: textFieldType,
          [`${className}`]: className,
          [`textField--${textFieldSizes}`]: textFieldSizes,
          "textField--disabled": disabled,
        })}
      />
      {error && (
        <span
          className={cx("errorMessage")}
          data-test-id={`error-${value}`}
          data-test='error-input'
        >
          {error}
        </span>
      )}
    </div>
  );
};
