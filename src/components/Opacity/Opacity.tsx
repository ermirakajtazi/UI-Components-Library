import React, { FC, MouseEvent } from "react";
import cx from "classnames";
//types
import { OpacityProps } from "./Opacity.types";
const opacity =
  "bg-blue-900 fixed w-screen h-screen top-0 left-0 opacity-25 z-20";
export const Opacity: FC<OpacityProps> = ({
  show = false,
  className = "",
  onClick,
}) => {
  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick && onClick();
  };
  return show ? (
    <div className={cx(opacity, { className })} onClick={handleOnClick} />
  ) : null;
};
