// HomePage.tsx
import React from "react";
import Navbar from "../Navbar";
import Page from "./Page";

const HomePage: React.FC = () => {
  return (
    <Page>
      <div className="mb-6 grid gap-3 grid-cols-1 sm:grid-cols-2 place-items-center">
        <div className="w-60 flex items-center">
          <div className="text-center sm:text-start">
            <h1 className="text-2xl font-medium">Ashika Verma</h1>
            <h2 className="text-lg text-slate-500">
              Software Developer in New York City
            </h2>
          </div>
        </div>
        <div className="w-60">
          <img className="rounded-full" src="./img/face1.jpg"></img>
        </div>
      </div>
      <Navbar />
      <div className="flex gap-2 sm:justify-normal justify-center">
        {["short", "long"].map((x) => (
          <button className="bg-white w-22 text-emerald-400 hover:bg-slate-100 rounded-full px-7 py-[2px] text-xs border-emerald-400 border">
            {x}
          </button>
        ))}
      </div>
      <div className="">
        <p className="text-xs">
          Hi there! My name is Ashika and I'm a Software Engineer at{" "}
          <a className="underline" href="https://www.citadelsecurities.com/">
            Citadel Securities
          </a>
          . I currently work on developing UIs for the firm's capital management
          and am learning waaay more finance than I ever imagined. In my
          freetime, you can catch me jogging throughout NYC or obsessing about
          compilers.
        </p>
      </div>
    </Page>
  );
};

export default HomePage;
