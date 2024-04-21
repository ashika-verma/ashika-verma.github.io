// HomePage.tsx
import React, { useState } from "react";
import Page from "./Page";
import { Item } from "../components/Item";
import { Header } from "../components/Header";

const ProjectsPage: React.FC = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Page>
      <Header title="Projects and Research" />
      <Item
        title="FIDO U2F Teensy Authenticator"
        description={
          <>
            My final project for Computer Systems Security (6.858) was a to
            design and implement a U2F Key that follows the FIDO2 U2F Protocol.
            The key is designed to interact with WebAuthn across different
            browsers as a second factor authenticator device. Click{" "}
            <a href="./files/Teensy_Security_Key.pdf" target="_blank">
              here
            </a>{" "}
            to read our final paper.
          </>
        }
      />
      <Item
        title="Security of CAT-SOOP"
        description={
          <>
            My final project for Network and Computer Security (6.857) was a
            security analysis of a popular MIT learning management system. We
            managed to break into a misconfigured CAT-SOOP instance run by the{" "}
            <a href="https://sicp-s1.mit.edu/" target="_blank">
              6.0001+2
            </a>
            , one of the largest classes at MIT, and reveal sensitive data as
            well as the ability to shut down the website entirely. Click
            <a href="./files/CAT_SOOP_final_project.pdf" target="_blank">
              {" "}
              here
            </a>{" "}
            to read our final paper, which also received the highest score in
            the class.
          </>
        }
      />
      <Item
        title="Transformation Tolerance of Machine Based Face Recognition Systems"
        description={
          <span>
            As a{" "}
            <a href="https://superurop.mit.edu/" target="_blank">
              SuperUROP scholar
            </a>
            , I worked with{" "}
            <a href="http://www.kylekeane.com/" target="_blank">
              Kyle Keane
            </a>{" "}
            in the{" "}
            <a href="https://web.mit.edu/sinhalab/" target="_blank">
              Sinha lab
            </a>{" "}
            on face recognition systems' abilities to detect faces given various
            levels of hue shift and directly compared the systems' abilities to
            those of humans. I presented a poster for the{" "}
            <a
              href="https://iclr2021generalization.github.io/papers/"
              target="_blank"
            >
              ICLRWorkshop2021
            </a>
            , presented a talk on my research at the MIT SuperUROP showcase, and
            wrote a{" "}
            <a
              href="./files/Transformation_Tolerance_of_Machine_based_Face_Recognition_Systems.pdf"
              target="_blank"
            >
              research article
            </a>{" "}
            to summarize my work.
          </span>
        }
      />

      <Item
        title="Vocagen"
        description={
          <>
            My final project for Interactive Music Systems (21M.385) was an
            application which generated harmonies based on some user recorded
            audio. I designed the entire user interface as well as the system
            which records and plays back audio. All development was done in
            Python and we used the Kivy library for the graphics. The code is on{" "}
            <a
              href="https://github.com/ashika-verma/Vocagen/tree/master"
              target="_blank"
            >
              GitHub
            </a>{" "}
            and a demo video along with some questionable singing can be found{" "}
            <a href="https://youtu.be/moV9K_uwRcc" target="_blank">
              here
            </a>
            .
          </>
        }
      />
      <Item
        title="XKCD New Tab"
        description={
          <>
            I got bored one day and developed a Chrome extension which shows a
            random XKCD along with its hovertext on every new tab in Chrome.
            Feel free to use it as well and add it to your browser{" "}
            <a
              href="https://chrome.google.com/webstore/detail/xkcd-new-tab/kbndmginnhajgnjcncdepimedpgielff"
              target="_blank"
            >
              here
            </a>
            !
          </>
        }
      />

      <Item
        title="Routify"
        description={
          <>
            I competed individually in MIT's web.lab competition over IAP and
            created a website which gamifies your productivity and allows you to
            compete against others. I placed fourth overall and learned lots
            about full-stack development. Unfortunately, Google's authentication
            only works for secured websites which I can't quite get on Heruko
            today, but feel free to check out the homepage{" "}
            <a href="http://routify.herokuapp.com/" target="_blank">
              here
            </a>
            ! Also feel free to check out{" "}
            <a
              href="https://github.com/ashika-verma/Routify_public"
              target="_blank"
            >
              here
            </a>{" "}
            for preview images and code.
          </>
        }
      />

      <Item
        title="Club in One (2011)"
        description={
          <>
            I coded for the first time in a local math camp (
            <a href="http://see-math.math.tamu.edu/" target="_blank">
              SEE-Math
            </a>
            ) with the Department of Mathematics at Texas A&M. The goal was to
            make an animation using{" "}
            <a href="https://www.maplesoft.com/" target="_blank">
              Maple
            </a>
            , which allowed us to draw shapes and translate or rotate the
            shapes. As an 11 year old, I had a great time and it was an amazing
            sneak peak into some of the fun things you can do with programming.
            Take a look at{" "}
            <a
              className="cursor-pointer"
              onClick={() => {
                setVisibility((prev) => !prev);
              }}
            >
              my short little animation
            </a>
            !
            <img
              style={{
                display: visibility ? "inherit" : "none",
                margin: "auto",
              }}
              id="seemathgif"
              src="img/ashika-v.gif"
            ></img>
          </>
        }
      />
    </Page>
  );
};

export default ProjectsPage;
