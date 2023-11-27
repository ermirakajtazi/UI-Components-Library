import React from "react";
import { Meta, Story } from "@storybook/react";
import { Modal } from "./Modal";
import { ModalProps } from "./Modal.types";

export default {
  title: "Atoms/Modal/Modal",
  component: Modal,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

export const _Modal: Story<ModalProps> = (args) => <Modal {...args} />;

_Modal.args = {
  show: false,
  size: "small",
  handleClose: console.log("show"),
  children: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et laoreet neque, ac iaculis ligula. Nunc a nunc hendrerit, rhoncus nisi a, volutpat felis. Curabitur velit felis, lobortis ac dolor vel, tempus gravida metus. Curabitur eleifend ullamcorper justo, nec cursus augue. Donec eu ligula viverra, cursus urna quis, placerat lacus. In ac sapien neque. Praesent quis fringilla magna. Sed rhoncus tempus consectetur.

  Donec elit nulla, laoreet et ornare et, convallis et risus. Suspendisse lobortis quam eu lorem laoreet, id maximus risus vestibulum. Nulla eget pulvinar elit. Curabitur auctor erat ac metus pellentesque, nec fringilla ligula vehicula. Etiam elementum, diam et sagittis malesuada, enim purus iaculis diam, eu ornare erat elit a nunc. Aenean in velit a libero vestibulum pharetra. Cras nec magna fringilla, pulvinar sem sit amet, rutrum tortor. Vestibulum auctor lorem ac ante aliquet condimentum. Duis semper aliquet erat eu condimentum. Ut finibus blandit quam, vel blandit orci semper vitae. Curabitur sit amet imperdiet dolor, in maximus tellus. Proin scelerisque arcu et felis pharetra, at mattis mi porta.
  
  Cras tortor ipsum, elementum quis dolor a, commodo ultricies eros. Nulla tincidunt nunc condimentum nunc interdum, eu tristique diam convallis. Quisque lobortis justo purus, vitae pretium turpis lobortis id. Aenean at nisi sodales, convallis ligula vel, tempus neque. Sed tempor feugiat neque ut condimentum. Nullam sem diam, pretium quis mattis sed, bibendum non quam. Etiam sit amet pharetra purus. In id nibh non purus eleifend venenatis.</div>,
  id: "modal",
  title: "This is a simple title of the modal",
  description:
    "This is a long description of the modal content,This is a long description of the modal content,This is a long description of the modal content",
};
