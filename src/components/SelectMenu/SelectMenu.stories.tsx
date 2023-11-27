import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { SelectEnums, SelectMenuSizesEnums } from "../../enums";
import { SelectMenu } from "./SelectMenu";

import { ISelectMenu } from "./SelectMenu.types";

export default {
  title: "Atoms/SelectMenu/SelectMenu",
  component: SelectMenu,
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _SelectMenu: Story<ISelectMenu> = (args) => (
  <SelectMenu {...args} />
);
_SelectMenu.args = {
  label: "Filter by Year",
  labelClassName: "text-sm font-secondary",
  value: "1995",
  defaultValue: "Select...",
  selectSizes:SelectMenuSizesEnums.SM
};

export const _SelectMenuPhoneNumber: Story<ISelectMenu> = (args) => (
  <SelectMenu {...args} />
);
_SelectMenuPhoneNumber.args = {
  label: "Filter by Year",
  labelClassName: "text-sm font-secondary",
  value: "1995",
  defaultValue: "Select...",
  selectType: SelectEnums.PHONENUMBER,
};
