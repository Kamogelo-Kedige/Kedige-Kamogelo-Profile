import React from "react";
import myImg from "../../Assets/avatar1.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <div className="relative py-16" id="about">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8 border-[#1a659e] 
                rounded-2xl 
                shadow-[0_0_20px_rgba(59,130,246,0.7)]"
      >
        <div className="text-center text-white p-6 md:col-span-8 md:pt-16">
          <h1 className="text-4xl md:text-[2.6em]">
            LET ME{" "}
            <span className="text-[#1a659e] font-bold tracking-wide animate-pulse">
              {" "}
              INTRODUCE{" "}
            </span>{" "}
            MYSELF
          </h1>
          <p className="pt-10 text-left text-[1.2em] leading-relaxed md:text-[1.5em]">
            I'm a Software Engineer who's passionate about building reliable,
            scalable, and user-focused software.
            <br />
            <br />
            Experienced with
            <b className="text-[#1a659e]">
              {" "}
              Java, Spring Boot, C#, ASP.NET, React, TypeScript, JavaScript, and
              SQL{" "}
            </b>
            I enjoy developing full-stack applications, designing backend
            systems, and turning ideas into practical products.
          </p>
        </div>
        <div className="flex justify-center py-4 md:col-span-4 md:pt-24">
          <Tilt>
            <img
              src={myImg}
              className="h-auto w-full max-w-sm rounded-full"
              alt="Kamogelo Kedige"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
}
export default Home2;
