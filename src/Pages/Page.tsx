// Page.tsx
import Navbar from "../Navbar";
import { Footer } from "../Footer";
import { PropsWithChildren } from "react";
// import Switch from "../components/Switch";

type PageProps = {
  isTopNav?: boolean;
};

const Page = ({ children, isTopNav = true }: PropsWithChildren<PageProps>) => {
  return (
    <div className="selection:text-slate-900 selection:bg-rose-600 ">
      <div className="flex justify-center w-full">
        {/* <div className="position absolute right-4 top-4">
        <Switch></Switch>
      </div> */}
        <div className="space-y-3  py-16  sm:w-[600px] w-full px-4">
          {isTopNav && <Navbar />}
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Page;
