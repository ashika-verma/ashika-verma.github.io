// HomePage.tsx
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Page from "./Page";
import { range } from "../util";

enum Blurb {
  short = "short",
  long = "long",
}

const options = Object.values(Blurb);

const HomePage: React.FC = () => {
  const [blurb, setBlurb] = useState(Blurb.short);
  const [faceCounter, setFaceCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaceCounter((prev) => (prev + 1) % 8);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const faces = range(8).map((x) => (
    <img className="rounded-full" src={`./img/face${x + 1}.jpg`}></img>
  ));

  return (
    <Page isTopNav={false}>
      <div className="mb-6 grid gap-4 sm:gap-20 grid-cols-1 sm:grid-cols-2 place-items-center">
        <div className="w-60 flex items-center">
          <div className="text-center sm:text-start">
            <h1 className="text-2xl font-medium">Ashika Verma</h1>
            <h2 className="text-lg text-slate-500">
              [bun test] Software Developer in New York City
            </h2>
          </div>
        </div>
        <div className="w-60">{faces[faceCounter]}</div>
      </div>
      <Navbar />
      <div className="flex gap-2 sm:justify-normal justify-center">
        {options.map((x) => (
          <button
            key={x}
            onClick={() => {
              setBlurb(x);
            }}
            className="bg-white w-22 text-emerald-400 hover:bg-slate-100 rounded-full px-7 py-[2px] text-xs border-emerald-400 border"
          >
            {x}
          </button>
        ))}
      </div>
      {blurb == Blurb.short ? (
        <div>
          <p className="text-xs">
            Hi there! My name is Ashika and I'm a Software Engineer at{" "}
            <a className="underline" href="https://www.citadelsecurities.com/">
              Citadel Securities
            </a>
            . I currently work on developing UIs for the firm's capital
            management and am learning waaay more finance than I ever imagined.
            In my freetime, you can catch me jogging throughout NYC or obsessing
            about compilers.
          </p>
        </div>
      ) : (
        <div className="text-xs space-y-2">
          <p>
            Well hello there! My name is Ashika and I am currently a software
            engineer at{" "}
            <a className="underline" href="https://www.citadelsecurities.com/">
              Citadel Securities
            </a>
            . Currently I reside in the Core UI team, which primarily owns all
            of the tools that are shared amongst the traders. If you imagine the
            trader dashboard, I know exactly how to make that, and work on
            maintaining our dashboards as well as the UIs for capital management
            and fusing. I also maintain the backend to our internal developer
            oriented ChatGPT tool!
          </p>
          <p>
            A couple years ago, I completed my M.Eng. and Bachelors in Computer
            Science and Engineering at MIT. I did a lot of cool stuff! And feel
            free to check out what I did in the other tabs.
          </p>
          <p>
            In the summer of 2021, I worked at{" "}
            <a className="underline" href="https://kensho.com/">
              Kensho
            </a>{" "}
            as a front-end engineer and learned a ton about design,
            accesibility, and the crazy powers of flexbox. My most visible and
            external work can be seen on{" "}
            <a
              className="underline"
              href="https://kensho.com/link"
              target="_blank"
            >
              here
            </a>
            , where I fully designed the landing page (aka flexbox magic).
          </p>
          <p>
            In 2020, I had the opportunity to work at{" "}
            <a
              className="underline"
              href="https://wpengine.com/atlas"
              target="_blank"
            >
              WP Engine
            </a>{" "}
            on the beginning phases of the Atlas project, which allows WordPress
            users to connect and host Headless WordPress websites on WP Engine.
            I mostly did back-end work developing a CLI tool for users, which is{" "}
            <a className="underline" href="https://wpengine.com/atlas/">
              featured
            </a>{" "}
            on the website! I also got to work with users and UX designers to
            make the CLI tool easier to use and understand.
          </p>
          <p>
            If you have any questions about me or maybe where those pictures
            were taken or would like to get in touch, feel free to{" "}
            <a className="underline" href="mailto:ashikav2000@gmail.com">
              email me
            </a>{" "}
            at <code>ashikav2000@gmail.com</code>!
          </p>
          <p>
            Alright, since you've read this far, have a joke: Why do programmers
            always mix up Halloween and Christmas? Because Oct. 31 == Dec. 25!
          </p>
        </div>
      )}
    </Page>
  );
};

export default HomePage;
