import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

export default {
  title: "Atoms/ProgressBar/Progress Bar",
  argTypes: {
    color: {
      // options: ["bg-primary", "bg-black"],
      control: { type: "select" },
    },
    borderColor: {
      options: ["border-primary", "border-black"],
      control: { type: "select" },
    },
  },
  component: ProgressBar,
} as Meta;

export const _BasicProgressBar: Story<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);

_BasicProgressBar.args = {
  progressText: "Loading...",
  progress: 23,
};
export const _WithTextProgressBar: Story<ProgressBarProps> = (args) => (
  <ProgressBar {...args} />
);

_WithTextProgressBar.args = {
  progress: 50,
};
