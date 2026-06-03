import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <div className="relative px-0 pb-8 pt-36 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-12 md:px-3">
            <div className="flex flex-col justify-center py-8 md:col-span-7 md:py-12">
              <h1 className="pb-5 text-4xl md:text-[2.1em]">
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </div>
            <div className="md:col-span-5 md:py-14 md:pt-28">
              <img src={laptopImg} alt="about" className="h-auto w-full" />
            </div>
          </div>
          <h1 className="pb-2 pt-3 text-center text-4xl font-medium text-white md:text-[2.3em]">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="pb-2 pt-3 text-center text-4xl font-medium text-white md:text-[2.3em]">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </div>
      </div>
    </>
  );
}

export default About;
