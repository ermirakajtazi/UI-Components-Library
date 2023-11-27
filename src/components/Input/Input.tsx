import React, { FC } from "react";
import cx from "classnames";
//types
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
  inputRef,
  id,
  name,
  className,
  disabled,
  inputSize = "default",
  inputType = "default",
  register,
  classNameLabel,
  label,
  value,
  error,
  ...props
}) => {
  const propsAndRegister = { ...register, ...props };
  return (
    <>
      <label
        className={cx(
          "block font-secondary text-base font-normal",
          classNameLabel
        )}
      >
        {label}
        <input
          {...propsAndRegister}
          value={value}
          className={cx("input", {
            [`input--${inputType}`]: inputType,
            [`input--${inputSize}`]: inputSize,
            [`${className}`]: className,
            "input--disabled": disabled,
          })}
          ref={inputRef}
          disabled={disabled}
        />
        {error ? (
          <span className='block text-xs text-red-500 py-0.5'>{error}</span>
        ) : (
          <span className='block h-1 mt-1' />
        )}
      </label>
    </>
  );
};
