import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={clsx(
      "relative w-full mx-auto my-4 bg-white shadow-xl rounded-xl dark:bg-slate-800",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
