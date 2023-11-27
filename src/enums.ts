export type ButtonSizes = "primary" | "xs" | "sm" | "md" | "lg" | "xl" | 'fullWidth';
export enum ButtonSizesEnums {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  fullWidth = 'fullWidth'
}
export enum ButtonTypesEnums {
  PRIMARY = "primary",
  PRIMARYLINEAR = "primaryLienar",
  DISABLED = "disabled",
  WHITE = "white",
  BLUE = "blue",
  YELLOW = "yellow",
  RED = "red",
  OURTLINED_TRANSPARENT = "outlinedTransparent",
  TRANSPARENT_BACKGROUND = "transparentBackground",
  GRAY_BACKGROUND = "grayBackground",
}
export type ButtonTypes =
  | "primary"
  | "primaryLienar"
  | "disabled"
  | "white"
  | "blue"
  | "yellow"
  | "red"
  | "outlinedTransparent"
  | "transparentBackground"
  | "grayBackground";
export type InputSizes = "default" | "sm" | "md" | "lg" | "xl" | "2xl";
export enum InputSizesEnums {
  DEFAULT = "default",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  "2XL" = "2xl",
}
export type InputTypes = "default" | "disabled" | "focused";

export enum InputTypesEnums {
  DEFAULT = "default",
  DISABLED = "disabled",
  FOCUSED = "focused",
}
export type TextFieldTypes = "default" | "name" | "email" | "password" | 'phoneNumber';

export enum TextFieldEnums {
  DEFAULT = "default",
  NAME = "name",
  EMAIL = "email",
  PASSWORD = "password",
  PHONENUMBER = 'phoneNumber'
}
export type TextFieldSizes = "sm" | "lg"
export enum TextFieldSizesEnums {
  SM = "sm",
  LG = "lg"
}
export type CheckboxTypes = "default" | "disabled";
export enum CheckboxEnums {
  DEFAULT = "default",
  DISABLED = "disabled",
}

export type SelectTypes = "default" | 'phoneNumber';
export enum SelectEnums {
  DEFAULT = "default",
  PHONENUMBER = 'phoneNumber'
}
export type SelectMenuSizes = "sm" | "lg"
export enum SelectMenuSizesEnums {
  SM = "sm",
  LG = "lg"
}