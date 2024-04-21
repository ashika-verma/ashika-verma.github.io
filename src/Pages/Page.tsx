// Page.tsx
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { PropsWithChildren } from "react";

type PageProps = {
  isTopNav?: boolean;
};

const Page = ({ children, isTopNav = false }: PropsWithChildren<PageProps>) => {
  return (
    <div className="flex justify-center w-full">
      <div className="space-y-3 max-w-[600px]">
        {isTopNav && <Navbar isTopNav={isTopNav} />}
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Page;
