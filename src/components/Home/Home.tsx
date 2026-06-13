import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaJava, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {
  SiCsharp,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTiktok,
  SiTypescript,
} from "react-icons/si";

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
              <h1 className=" text-[#fafafa] pb-4 pl-0 text-4xl md:pl-10 md:text-5xl">
                Hello there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className=" text-[#fafafa] pl-0 text-4xl md:pl-10 md:text-5xl">
                I'm
                <strong className="text-[#1a659e]"> Kamogelo Kedige</strong>
              </h1>

              <div className="p-6 pt-10 text-left md:p-12 text-lg md:text-2xl lg:text-2xl">
                <Type />
              </div>
              <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
                <div className="text-left text-white">
                  <ul className="mr-60 mt-4 flex items-center justify-center gap-10 sm:gap-6 md:gap-20 md:mr-0 md:justify-start">
                    <li className="inline-flex items-center justify-center rounded-full transition-all">
                      <FaJava className="text-4xl sm:text-2xl md:text-5xl" />
                    </li>
                    <li className="inline-flex items-center justify-center rounded-full transition-all">
                      <SiCsharp className="text-4xl sm:text-2xl md:text-5xl" />
                    </li>
                    <li className="inline-flex items-center justify-center rounded-full transition-all">
                      <FaReact className="text-4xl sm:text-2xl md:text-5xl" />
                    </li>
                    <li className="inline-flex items-center justify-center rounded-full transition-all">
                      <SiSpringboot className="text-4xl sm:text-2xl md:text-5xl" />
                    </li>
                    <li className="inline-flex items-center justify-center rounded-full transition-all">
                      <SiPostgresql className="text-4xl sm:text-2xl md:text-5xl" />
                    </li>
                  </ul>
                </div>
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce ">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/70">
              <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white"></div>
            </div>
          </a>
        </div>
      </div>
      <Home2 />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <div className="text-center text-white">
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-10 sm:gap-6 md:gap-20">
            <li>
              <a
                href="https://github.com/Kamogelo-Kedige"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
              >
                <AiFillGithub className="text-3xl sm:text-2xl md:text-5xl" />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110 "
              >
                <AiOutlineFacebook className="text-3xl sm:text-2xl md:text-5xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kamogelo-kedige-bb2841389"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
              >
                <FaLinkedinIn className="text-3xl sm:text-2xl md:text-5xl" />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
              >
                <SiTiktok className="text-3xl sm:text-2xl md:text-5xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
