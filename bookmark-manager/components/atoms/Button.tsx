import { IButtonProps } from "@/interfaces/index";

export function Button({ text, classes, type }: IButtonProps): JSX.Element {
  return (
    <button type={type} className={`btn ${classes}`}>
      {text}
    </button>
  );
}
