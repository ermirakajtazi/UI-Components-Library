import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { Dropdown } from "./Dropdown";
import { TestProps } from "./Test.types";

export default {
  title: "Atoms/Dropdown/Dropdown",
  component: Dropdown,
} as Meta;

const dataTest = [
  { value: 1, label: "Andy" },
  { value: 2, label: "George" },
  { value: 3, label: "Clive" },
  { value: 4, label: "Peter" },
  { value: 5, label: "Cleatus" },
];

export const _Primary: Story<TestProps> = (args) => <Dropdown {...args} />;
_Primary.args = {
  primary: true,
  label: "Dropdown1",
  data: dataTest,
  ButtonID: "button-person",
  SelectLabelID: "person",
  SelectLabelText: "Select item",
  SelectMaxSize: 10,
};
