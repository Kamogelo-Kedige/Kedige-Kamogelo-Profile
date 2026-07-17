import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import d1 from "../../Assets/Projects/d1.png";
import d2 from "../../Assets/Projects/d2.png";
import d3 from "../../Assets/Projects/d3.png";
import d4 from "../../Assets/Projects/d4.png";
import d5 from "../../Assets/Projects/d5.png";
import m1 from "../../Assets/Projects/m1.png";
import m2 from "../../Assets/Projects/m2.png";
import m3 from "../../Assets/Projects/m3.png";
import m4 from "../../Assets/Projects/m4.png";
import m5 from "../../Assets/Projects/m5.png";
import m6 from "../../Assets/Projects/m6.png";
import c1 from "../../Assets/Projects/c1.png";
import c2 from "../../Assets/Projects/c2.png";
import c3 from "../../Assets/Projects/c3.png";
import calc1 from "../../Assets/Projects/calculator1.png";
import calc2 from "../../Assets/Projects/calculator2.png";
import portfolio1 from "../../Assets/Projects/p1.png";
import portfolio2 from "../../Assets/Projects/p2.png";
import portfolio3 from "../../Assets/Projects/p3.png";

function Projects() {
  return (
    <div className="relative bg-gradient-to-bl from-black/60 to-[#0c0818e7] pb-8 pt-36">
      <Particle />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="pt-2 text-center text-4xl font-medium text-white md:text-[2.3em]">
          Projects Ive<strong className="purple"> Worked on </strong>
        </h1>

        <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            imgPaths={[m1, m2, m3, m4, m5, m6]}
            title="MzansiBuilds"
            description="A developer collaboration platform where users can create accounts, share projects, update milestones, comment on others' work, request collaborations, and appear on a celebration wall when projects are completed. Features a live activity feed and is secured with Supabase Auth and PostgreSQL Row Level Security."
            ghLink="https://github.com/Kamogelo-Kedige/MzansiBuilds"
            demoLink="https://kamogelo-kedige.github.io/MzansiBuilds/index.html"
          />

          <ProjectCard
            imgPaths={[c1, c2, c3]}
            title="Contact Book App"
            description="A responsive digital contact management app built with HTML, CSS, and JavaScript. Powered by a REST API for data persistence, it supports adding, editing, and deleting contacts with profile pictures. Demonstrates DOM manipulation, event handling, and user-centric UI design."
            ghLink="https://github.com/Kamogelo-Kedige/Contact-Book-App"
            demoLink="https://kamogelo-kedige.github.io/Contact-Book-App/"
          />

          <ProjectCard
            imgPaths={[d1, d2, d3, d4, d5]}
            title="Daily Deli"
            description="A B2C online grocery and deli e-commerce platform built with ASP.NET, SQL Server, and Bootstrap. Features dietary-aware product filtering, recipe-integrated shopping carts, dynamic weekly meal planning, a community blog hub, and a loyalty points system rewarding repeat shoppers."
            ghLink="https://github.com/Kamogelo-Kedige/Daily-Deli-2.0"
          />

          <ProjectCard
            imgPaths={[calc1, calc2]}
            title="Calculator App"
            description="An enhanced calculator web app built with HTML, CSS, and JavaScript. Supports basic arithmetic alongside advanced functions — square root, squaring, and percentages. Includes an ANS feature that stores and reuses the last result, plus a fully responsive UI optimised for all screen sizes."
            ghLink="https://github.com/Kamogelo-Kedige/My-Calculator-App"
            demoLink="https://kamogelo-kedige.github.io/My-Calculator-App/"
          />

          <ProjectCard
            imgPaths={[portfolio1, portfolio2, portfolio3]}
            title="Portfolio Website"
            description="Personal portfolio site showcasing projects, skills, education, and contact information. Features a clean responsive layout with a light/dark theme toggle and glassmorphism-inspired card components. Built entirely with HTML5, CSS3 custom properties, and Vanilla JavaScript — no frameworks."
            ghLink="https://github.com/Kamogelo-Kedige/Portfolio-of-Kedige-Kamogelo"
            demoLink="https://kedigekamogelo.netlify.app"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
