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
          <h1 className="pb-2 pt-3 text-center text-4xl font-medium text-white md:text-[2.3em]">
            More Tools and <strong className="purple">SkillSet </strong>
          </h1>

          <Techstack />

          <Github />
        </div>
      </div>
    </>
  );
}

export default About;
