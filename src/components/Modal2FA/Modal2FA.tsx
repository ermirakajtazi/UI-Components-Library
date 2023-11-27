import React from "react";
import { ModalProps } from "./Modal2FA.types";
import "./Modal2FA.scss";
export const Modal2FA = ({
  id,
  children,
  onClickOut,
  size,
  title,
  description,
  show,
  ...props
}: ModalProps) => {
  return (
    <>
      {show && (
        <>
          <div className='modal-2fa' {...props}>
            <div className='modal-container-2fa'>
              <div className='modal-content-2fa'>
                <p className='modal-title-2fa'>{title}</p>
                <div className='w-1/5'>{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
