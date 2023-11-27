import React, { FC } from "react";
import cx from "classnames";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  type = "button",
  className = "",
  buttonRef = null,
  btnSize = "sm",
  btnType = "primary",
  isLoading = false,
  after: After = null,
  before: Before = null,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={cx("btn", {
        [`btn--${btnType}`]: btnType,
        [`btn--${btnSize}`]: btnSize,
        [`${className}`]: className,
        "btn--disabled": disabled,
      })}
      disabled={disabled}
      ref={buttonRef}
    >
      {children}
      {After && <span className='btn__after'>{After}</span>}
    </button>
  );
};
