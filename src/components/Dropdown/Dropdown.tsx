import React, { FC, useState } from "react";
import { TestProps } from "./Test.types";
import "./Dropdown.scss";

export const Dropdown: FC<TestProps> = ({
  data,
  SelectLabelID,
  SelectLabelText,
  ButtonID,
  SelectMaxSize,
}) => {
  const [value, setValue] = useState("Select");

  // list count + max list count
  const count = Object.keys(data).length; // total json file entries
  const countMax = count >= SelectMaxSize ? SelectMaxSize : count; // check if list count exceeds SelectMaxSize

  // toggle show/hide select dd on button click
  const [showResults, setShowResults] = useState(false);
  const handleClickButton = (e: any) => {
    setShowResults(!showResults); // toggle show/hide select options list div
  };

  // on option select capture value and close select
  const handleClickOption = (e: any) => {
    setValue(e.currentTarget.value);
    setShowResults(false);
  };

  let keyvalue = 1;
  const options = data.map((item) =>
    Object.assign(item, { value: item.value, label: item.label })
  );
  return (
    <div className='dropdown'>
      <h2 title='sub-heading'>{SelectLabelText}</h2>

      <button id={ButtonID} type='button' onClick={handleClickButton}>
        {value}
      </button>

      {
        <div
          className={
            !showResults ? "select-wrapper-close" : "select-wrapper-open"
          }
        >
          <label htmlFor={SelectLabelID} className='hide-element'>
            {SelectLabelText}
          </label>
          <select
            name={SelectLabelID}
            id={SelectLabelID}
            value={value}
            size={countMax}
            className={count < SelectMaxSize ? "hide-scroll" : ""}
          >
            <option data-testid='select-option' key='0' value='select' hidden>
              Select
            </option>

            {options.map((filtered) => {
              return (
                <option
                  data-testid='select-option'
                  key={keyvalue++}
                  value={filtered?.label}
                  onClick={handleClickOption}
                >
                  {filtered.label}
                </option>
              );
            })}
          </select>
        </div>
      }
    </div>
  );
};
