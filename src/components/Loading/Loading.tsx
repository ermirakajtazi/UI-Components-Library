import React from 'react'
import cx from "classnames";
import  "./Loading.scss";
import { LoadingSpinnerProps } from './Loading.types';

export const LoadingSpinner = ({
  isLoading,
  color = "bg-black",
  text = "",
}: LoadingSpinnerProps) => {
  if (!isLoading) return null;
  return (
    <div className={"wrapper"}>
      <div className={cx("div1", color)}></div>
      <div className={cx("div2", color)}></div>
      <div className={cx("div3", color)}></div>
      <span>{text}</span>
    </div>
  );
};
