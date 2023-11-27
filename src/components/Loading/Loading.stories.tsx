import { Meta, Story } from "@storybook/react";
import { LoadingSpinner } from "./Loading";
import { LoadingSpinnerProps } from "./Loading.types";
import React from "react";

export default {
  argTypes: {
    color: {
      // options: ["bg-primary", "bg-black"],
      control: { type: "select" },
    },
  },
  title: "Atoms/Loading/Loading Spinner",
  component: LoadingSpinner,
} as Meta;

export const _BasicLoading: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);
_BasicLoading.args = {
  isLoading: true,
};

export const _LoadingWithText: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);
_LoadingWithText.args = {
  isLoading: true,
  text: "Loading...",
};
