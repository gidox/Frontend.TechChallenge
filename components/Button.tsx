import type { ReactNode, Ref } from "react";

import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  ref: Ref<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    className={clsx(
      "flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      rest.className
    )}
  >
    {children}
  </button>
);

export default Button;
