import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Opacity } from "./Opacity";
import { OpacityProps } from "./Opacity.types";

export default {
  title: "Atoms/UI/Opacity",
  component: Opacity,
} as Meta;

export const _Opacity: Story<OpacityProps> = (args) => <Opacity {...args} />;
_Opacity.args = {
  show: true,
};
