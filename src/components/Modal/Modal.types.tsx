import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  description?: string;
  id?: string;
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  show?: boolean;
  [key: string]: any;
}
