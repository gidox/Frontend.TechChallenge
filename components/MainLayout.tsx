import { ReactNode } from "react";

import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <Navbar />
    <main>
      <div className="container mx-auto">{children}</div>
    </main>
  </div>
);

export default MainLayout;
