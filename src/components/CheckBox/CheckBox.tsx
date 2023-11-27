import React from "react";
import { Controller, FieldValues } from "react-hook-form";

import { CheckboxProps } from "./CheckBox.types";

export const Checkbox = <T extends FieldValues>({
  name,
  label = "",
  control,
  isDisabled = false,
}: CheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      render={({ field }) => {
        return (
          <div className='container'>
            <label className='lable'>
              <span className='labelText'>{label}</span>
              <div className='inputContainer'>
                {field.value}
                <input
                  disabled={isDisabled}
                  ref={field.ref}
                  name={field.name}
                  checked={field.value}
                  onChange={(...args) => {
                    if (isDisabled) return;
                    field.onChange(...args);
                  }}
                  type='checkbox'
                />
              </div>
            </label>
          </div>
        );
      }}
      name={name}
    />
  );
};
