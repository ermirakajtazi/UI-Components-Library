import React from "react";
import { Meta, Story } from "@storybook/react";
import { FieldValues, useForm, useWatch } from "react-hook-form";
import { Checkbox } from "./CheckBox";
import { CheckboxProps } from "./CheckBox.types";
import { CheckboxEnums } from "../../enums";

export default {
  title: "Atoms/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: {
    onChange: {
      action: "onChanged",
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const _Default: Story<CheckboxProps<FieldValues>> = (args) => {
  const form = useForm();
  return <Checkbox {...args} name='test' control={form.control} />;
};

_Default.args = { label: "Name" };

export const _Disabled: Story<CheckboxProps<FieldValues>> = (args) => {
  const form = useForm();
  return <Checkbox {...args} name='test' control={form.control} />;
};

_Disabled.args = { label: "Name", isDisabled: true };

export const InForm = () => {
  const { control, getValues } = useForm({
    mode: "onChange",
    defaultValues: { cheese: true, onions: true, mayo: false },
  });

  useWatch({ control, name: "cheese" });
  useWatch({ control, name: "onions" });
  useWatch({ control, name: "mayo" });

  return (
    <div className='w-56'>
      <div className='flex gap-4'>
        <Checkbox
          name='cheese'
          label='Cheese'
          control={control}
          checkBoxType={CheckboxEnums.DEFAULT}
        />
        <Checkbox
          name='onions'
          label='Onions'
          control={control}
          checkBoxType={CheckboxEnums.DEFAULT}
        />
        <Checkbox
          name='mayo'
          label='Mayo'
          control={control}
          checkBoxType={CheckboxEnums.DEFAULT}
        />
      </div>
      <pre>
        <code>{JSON.stringify(getValues(), null, 2)}</code>
      </pre>
    </div>
  );
};
