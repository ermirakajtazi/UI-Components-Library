import React, { FC, useState } from "react";
import "./Tooltip.scss";
import { TooltipProps } from "./Tooltip.types";
export const Tooltip: FC<TooltipProps> = ({
  delay,
  direction,
  content,
  children,
  ...props
}) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <div
      {...props}
      className='Tooltip-Wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"}`}>{content}</div>
      )}
    </div>
  );
};
