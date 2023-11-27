import { Meta, Story } from "@storybook/react";
import React from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { LoadingSkeletonProps } from "./LoadingSkeleton.types";

export default {
  argTypes: {
    color: {
      // options: ["bg-primary", "bg-black"],
      control: { type: "select" },
    },
  },
  title: "Atoms/Loading Skeleton/Loading Skeleton",
  component: LoadingSkeleton,
} as Meta;

export const _BasicLoading: Story<LoadingSkeletonProps> = (args) => (
  <LoadingSkeleton {...args} />
);
_BasicLoading.args = {
  isLoading: true,
};

