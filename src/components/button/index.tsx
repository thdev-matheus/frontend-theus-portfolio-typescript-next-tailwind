import { forwardRef } from "react";
import * as T from "./types";

/* 
Para funcionar esse botão precisei colocar as seguintes chaves no arquivo tailwind.config.js dentro do module.exports:

theme: {
    extend: {
      textColor: {
        "button-color-primary": string,
        "button-color-secondary": string,
        "button-hover-color-primary": string,
        "button-hover-color-secondary": string,
      },
      backgroundColor: {
        "button-background-color-primary": string,
        "button-background-color-secondary": string,
        "button-hover-background-color-primary": string,
        "button-hover-background-color-secondary": string,
      },
    },
  },
*/

const Button = forwardRef<HTMLButtonElement, T.IButtonProps>(
  ({ children, primary = true, secondary = false, ...rest }, ref) => {
    secondary && (primary = false);

    return (
      <button
        {...rest}
        ref={ref}
        className={`w-full h-[2.5rem] rounded-[.5rem]  hover:btn-animation transition-all ${
          primary
            ? "text-button-color-primary bg-button-background-color-primary hover:text-button-hover-color-primary hover:bg-button-hover-background-color-primary"
            : "text-button-color-secondary bg-button-background-color-secondary hover:text-button-hover-color-secondary hover:bg-button-hover-background-color-secondary"
        }`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
