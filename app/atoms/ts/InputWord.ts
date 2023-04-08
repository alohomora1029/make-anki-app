import { FormHTMLAttributes } from "react"
 
export type InputWord <T extends HTMLElement> = Input & Event & {
  target: T;
  preventDefault: () => void;
}

 type Input = {
  onSubmit: (e: React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) =>void
}