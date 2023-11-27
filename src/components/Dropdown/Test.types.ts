export interface TestProps {
  data: { value: number; label: string }[];
  SelectLabelID?: string;
  SelectLabelText?: string;
  ButtonID?: string;
  SelectMaxSize: number;
  primary?:boolean;
  label?:string;
  name?:string;
  className?:string
}
