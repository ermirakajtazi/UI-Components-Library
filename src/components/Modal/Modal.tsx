import React, { useState } from "react";
import { ModalProps } from "./Modal.types";
import "./Modal.scss";
import { useDisableBodyScroll } from "../../utils/useDIsabledBodyScroll";
export const Modal = ({
  id,
  children,
  onClickOut,
  size,
  title,
  description,
  show,
  closeIcon,
  handleClose,
  ...props
}: ModalProps) => {
  useDisableBodyScroll(show || false);
  return (
    <>
      {show && (
        <>
          <div className='modal-container' {...props}>
            <div id={id} className={`modal ${size}`}>
              <div className='modal-header'>
                <div onClick={handleClose}>
                  <img
                    className='modal-closeIcon'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBk_H3FWDR9g3v4p24cU5wlVn4OI6xLkkkhM10yjJiUZ7HoZ7CRfrK-mDaBbT-rmpuirM&usqp=CAU'
                  />
                </div>
              </div>
              <div className='modal-content'>
                <div className='modal-title'>{title}</div>
                <div className='modal-description'>
                  {description && <p>{description}</p>}
                </div>
                <div className='children-content'> {children}</div>
              </div>
            </div>
          </div>
          <div className='modal-effect'></div>
        </>
      )}
    </>
  );
};
