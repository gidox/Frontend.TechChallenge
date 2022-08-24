import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
const Card = ({ children }: CardProps) => (
  <div className="relative w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
    {children}
  </div>
);

export default Card;
