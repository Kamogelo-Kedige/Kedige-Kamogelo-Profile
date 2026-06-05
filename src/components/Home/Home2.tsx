import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <div className="relative py-16" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8">
        <div className="text-center text-white md:col-span-8 md:pt-16">
          <h1 className="text-4xl md:text-[2.6em]">
            LET ME{" "}
            <span className="text-[#1a659e] font-bold tracking-wide animate-pulse">
              {" "}
              INTRODUCE{" "}
            </span>{" "}
            MYSELF
          </h1>
          <p className="pt-10 text-left text-[1.2em] leading-relaxed md:text-[1.5em]">
            I’m a Software Engineer driven by curiosity and a love for turning
            bold ideas into reliable and practical software solutions.
            <br />
            <br />
            My jounery has taken me through
            <b className="text-[#1a659e]">
              {" "}
              Java, C#, JavaScript, TypeScript and SQL{" "}
            </b>
            each shaping how I build systems and intuitive user experiences and
            deepening my understanding of software development.
            <br />
            <br />I started out building with{" "}
            <b className="text-[#1a659e]">ASP.NET</b> and the classic trio of
            <b className="text-[#1a659e]"> HTML</b>,{" "}
            <b className="text-[#1a659e]">CSS</b>, and
            <b className="text-[#1a659e]"> JavaScript</b>. Those early days
            taught me the foundations of web development and gave me a deep
            respect for simplicity.
            <br />
            <br />
            Over time, I discovered new tools that matched my curiosity and
            ambition. Now, whenever possible, I love building projects with my
            new favourite stack:
            <b className="text-[#1a659e]"> Spring Boot</b> on the backend and
            modern frameworks like
            <b className="text-[#1a659e]"> React.js</b>
          </p>
        </div>
        <div className="flex justify-center py-4 md:col-span-4 md:pt-24">
          <Tilt>
            <img src={myImg} className="h-auto w-full max-w-sm" alt="avatar" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
export default Home2;
