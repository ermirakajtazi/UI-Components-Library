import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ButtonProps } from "./Button.types";
import { Button } from "./Button";
import { ButtonTypesEnums } from "../../enums";

export default {
  title: "Atoms/Buttons/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _Primary: Story<ButtonProps> = (args) => <Button {...args} />;
_Primary.args = {
  children: "Primary",
  btnSize: "primary",
  btnType: ButtonTypesEnums.PRIMARY,
};
export const _PrimaryLinear: Story<ButtonProps> = (args) => (
  <Button {...args} />
);
_PrimaryLinear.args = {
  children: "Primary Linear",
  btnSize: "primary",
  btnType: ButtonTypesEnums.PRIMARYLINEAR,
};
export const _Disabled: Story<ButtonProps> = (args) => <Button {...args} />;
_Disabled.args = {
  children: "Disabled",
  btnSize: "primary",
  btnType: ButtonTypesEnums.DISABLED,
  onClick: () => null,
};
export const _White: Story<ButtonProps> = (args) => <Button {...args} />;
_White.args = {
  children: "White",
  btnSize: "primary",
  btnType: ButtonTypesEnums.WHITE,
};
export const _Blue: Story<ButtonProps> = (args) => <Button {...args} />;
_Blue.args = {
  children: "Blue",
  btnSize: "primary",
  btnType: ButtonTypesEnums.BLUE,
};
export const _Yellow: Story<ButtonProps> = (args) => <Button {...args} />;
_Yellow.args = {
  children: "Yellow",
  btnSize: "primary",
  btnType: ButtonTypesEnums.YELLOW,
};
export const _Red: Story<ButtonProps> = (args) => <Button {...args} />;
_Red.args = {
  children: "Red",
  btnSize: "primary",
  btnType: ButtonTypesEnums.RED,
};
export const _OutlinedTransparent: Story<ButtonProps> = (args) => (
  <Button {...args} />
);
_OutlinedTransparent.args = {
  children: "Outlined transparent",
  btnSize: "primary",
  btnType: ButtonTypesEnums.OURTLINED_TRANSPARENT,
};
export const _TransparentBackground: Story<ButtonProps> = (args) => (
  <Button {...args} />
);
_TransparentBackground.args = {
  children: "Transparent background",
  btnSize: "primary",
  btnType: ButtonTypesEnums.TRANSPARENT_BACKGROUND,
};
export const _GrayBackground: Story<ButtonProps> = (args) => (
  <Button {...args} />
);
_GrayBackground.args = {
  children: "Gray background",
  btnSize: "primary",
  btnType: ButtonTypesEnums.GRAY_BACKGROUND,
};
