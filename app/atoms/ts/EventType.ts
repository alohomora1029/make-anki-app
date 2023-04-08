import { FormHTMLAttributes } from "react"

export type Input = {
  onSubmit: (e: React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) =>void
}