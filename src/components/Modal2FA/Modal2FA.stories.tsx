import React from "react";
import { Meta, Story } from "@storybook/react";
import { Modal2FA } from "./Modal2FA";
import { ModalProps } from "./Modal2FA.types";

export default {
  title: "Atoms/Modal2FA/Modal2FA",
  component: Modal2FA,
} as Meta;

export const _Modal2FA: Story<ModalProps> = (args) => <Modal2FA {...args} />;

_Modal2FA.args = {
  show: false,
  children: <div>jisjdfjsijdf</div>,
  id: "modal",
  title:
    "For your security enable two factor authentification by clicking the button Enable 2FA",
  description:
    "This is a long description of the modal content,This is a long description of the modal content,This is a long description of the modal content",
};
