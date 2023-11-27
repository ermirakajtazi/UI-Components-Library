import React from "react";
import { Meta, Story } from "@storybook/react";
import { TextField } from "./TextField";
import { TextFieldProps } from "./TextField.types";
import { TextFieldEnums, TextFieldSizesEnums } from "../../enums";

export default {
  title: "Atoms/TextField/TextField",
  component: TextField,
  argTypes: {
    onChange: {
      action: "onChanged",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _Default: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);
_Default.args = {
  placeholder: "Default",
  type: "text",
  id: "default",
  textFieldType: TextFieldEnums.DEFAULT,
  error: "",
};
export const _Email: Story<TextFieldProps> = (args) => <TextField {...args} />;

_Email.args = {
  textFieldType: TextFieldEnums.EMAIL,
  type: "email",
  id: "username",
  placeholder: "Enter email address",
  error: "",
};
export const _Password: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);
_Password.args = {
  textFieldType: TextFieldEnums.PASSWORD,
  type: "password",
  id: "password",
  placeholder: "Enter password",
  error: "",
  label:'Test'
};

export const _Name: Story<TextFieldProps> = (args) => <TextField {...args} />;

_Name.args = {
  textFieldType: TextFieldEnums.NAME,
  type: "text",
  id: "name",
  placeholder: "Enter name",
  error: "",
  textFieldSizes: TextFieldSizesEnums.SM,
  label:'Test'
};
export const _PhoneNumber: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);
_PhoneNumber.args = {
  placeholder: "7123456000",
  type: "text",
  id: "default",
  textFieldType: TextFieldEnums.PHONENUMBER,
  error: "",
  textFieldSizes: TextFieldSizesEnums.SM,
  label:'Test'
};
