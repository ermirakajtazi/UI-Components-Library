import { ReactNode } from "react";

export interface ModalProps {
  title?: string;
  description?: string;
  id?: string;
  children?: ReactNode;
  show?: boolean;
  [key: string]: any;
}
