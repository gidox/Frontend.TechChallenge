import Head from "next/head";
import { ReactNode } from "react";

import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <Head>
      <title>Paramo poke app</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Navbar />
    <main>
      <div className="container mx-auto">{children}</div>
    </main>
  </div>
);

export default MainLayout;
