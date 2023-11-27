import { useEffect } from "react";

export const useDisableBodyScroll = (show: boolean) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [show]);
};
