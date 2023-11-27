import React from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import cx from "classnames";

export const ProgressBar = ({
  progress,
  progressText = "",
  // color = "bg-primary",
  borderColor = "border-primary",
}: ProgressBarProps) => {
  const _progress = Math.min(Math.max(0, progress), 100);
  return (
    <div className='flex flex-col items-center justify-center w-56'>
      <div className={cx("w-full border-2 h-6 rounded-md", borderColor)}>
        <div
          // className={cx(" h-full transition-all duration-250", color)}
          style={{ width: `${_progress}%` }}
        ></div>
      </div>
      <span>{progressText}</span>
    </div>
  );
};
