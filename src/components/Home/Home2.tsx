import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <div className="relative py-16" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8">
        <div className="text-center text-white md:col-span-8 md:pt-16">
          <h1 className="text-4xl md:text-[2.6em]">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="pt-10 text-left text-[1.2em]">
            I’m a Software Engineer who loves transforming ideas into reliable,
            scalable products. Over time, I’ve explored several technologies and
            found my passion in building high-performance systems and intuitive
            user experiences.
            <br />
            <br />
            I’m proficient in
            <i>
              <b className="purple">
                {" "}
                JavaScript, C++, Rust, Node.js, and Java{" "}
              </b>
            </i>
            — and I enjoy working across both backend and frontend stacks.
            <br />
            <br />
            My key areas of interest include developing
            <i>
              <b className="purple">
                {" "}
                Web Applications, Blockchain Solutions,{" "}
              </b>
            </i>
            and exploring new ways to bridge on-chain and off-chain systems.
            <br />
            <br />
            Whenever possible, I love building projects with
            <b className="purple"> Node.js </b> and modern frameworks like{" "}
            <i>
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>.
            </i>
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
