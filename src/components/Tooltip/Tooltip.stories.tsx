import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

export default {
  title: "Atoms/Tooltip/Tooltip",
  component: Tooltip,
  argTypes: {
    onChange: {
      action: "onChanged",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _Default: Story<TooltipProps> = (args) => <Tooltip {...args} />;
_Default.args = {
  children: (
    <span className='example-emoji' role='img' aria-label='cowboy emoji'>
      🤠
    </span>
  ),
  content: "Its a tooltip component",
  direction: "right",
};
