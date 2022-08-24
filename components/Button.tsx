import type { ReactNode, Ref } from "react";

import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: string;
  ref?: Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, variant = "primary", ...rest }: ButtonProps) => (
  <button
    {...rest}
    className={clsx(
      "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center  transition duration-500 ease-in-out transform  rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 ",
      {
        ["bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white"]:
          variant === "primary",
      },
      {
        ["bg-transparent text-gray-700 0 ring-blue-500 outline outline-blue-700 outline-2 ring-offset-2 hover:translate-y-1 dark:text-white dark:ring-offset-4"]:
          variant === "secondary",
      },
      rest.className
    )}
  >
    {children}
  </button>
);

export default Button;
