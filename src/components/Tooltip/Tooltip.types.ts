import { ReactNode } from "react";

export interface TooltipProps {
    timeout?:number | undefined,
    children?:ReactNode,
    delay?:number,
    direction?:string,
    content?:string,
 
}
