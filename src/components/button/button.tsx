import { DetailedHTMLProps } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonText?: string;
}
export function Button({ buttonText, ...rest }: IButtonProps) {
  return <button {...rest}>{buttonText}</button>;
}
