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
      <div className="space-y-3  py-16  sm:w-[600px] w-full px-4">
        {isTopNav && <Navbar />}
        {children}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Page;
