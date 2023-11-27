import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input } from "./Input";
import { InputProps } from "./Input.types";
import { InputSizesEnums, InputTypesEnums } from "../../enums";
export default {
  title: "Atoms/Inputs/Input",
  component: Input,
  argTypes: {
    onChange: {
      action: "onChanged",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _DefaultInput: Story<InputProps> = (args) => <Input {...args} />;
_DefaultInput.args = {
  inputSize: InputSizesEnums.MD,
  inputType: InputTypesEnums.DEFAULT,
};
export const _DisabledInput: Story<InputProps> = (args) => <Input {...args} />;
_DisabledInput.args = {
  inputSize: InputSizesEnums.MD,
  inputType: InputTypesEnums.DISABLED,
};
export const _FocusedInput: Story<InputProps> = (args) => <Input {...args} />;
_FocusedInput.args = {
  inputSize: InputSizesEnums.MD,
  inputType: InputTypesEnums.FOCUSED,
};
