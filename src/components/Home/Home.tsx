import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <div
        className="relative bg-gradient-to-b from-black/40 to-[#0f0b1e] pt-12 pb-8"
        id="home"
      >
        <Particle />
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 text-left text-whitesmoke md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7 md:pt-12">
              <h1 className="pb-4 pl-0 text-4xl md:pl-10 md:text-5xl">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="pl-0 text-4xl md:pl-10 md:text-5xl">
                I'M
                <strong className="text-[#cd5ff8]"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div className="p-6 pt-10 text-left md:p-12">
                <Type />
              </div>
            </div>

            <div className="pb-5 md:col-span-5">
              <img
                src={homeLogo}
                alt="home pic"
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <div className="text-center text-white">
          <h1>Find Me On</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="mt-4 flex items-center justify-center gap-4">
            <li>
              <a
                href="https://github.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#700c86] transition-all hover:bg-[#68187a] hover:text-white"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#700c86] transition-all hover:bg-[#68187a] hover:text-white"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#700c86] transition-all hover:bg-[#68187a] hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#700c86] transition-all hover:bg-[#68187a] hover:text-white"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
