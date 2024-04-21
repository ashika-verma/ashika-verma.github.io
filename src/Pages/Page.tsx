// Page.tsx
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { PropsWithChildren } from "react";

type PageProps = {
  isTopNav?: boolean;
};

const Page = ({ children, isTopNav = true }: PropsWithChildren<PageProps>) => {
  return (
    <div className="flex justify-center w-full">
      <div className="space-y-3 max-w-[600px] py-16  w-full px-4">
        {isTopNav && <Navbar />}
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Page;
