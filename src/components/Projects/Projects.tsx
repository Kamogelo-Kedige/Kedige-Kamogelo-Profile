import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <div className="relative bg-gradient-to-bl from-black/60 to-[#0c0818e7] pb-8 pt-36">
      <Particle />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="pt-2 text-center text-4xl font-medium text-white md:text-[2.3em]">
          Some of the projects I have
          <strong className="purple"> worked on </strong>
        </h1>

        <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={chatify}
              title="MzansiBuilds"
              description="A developer collaboration platform where users can create accounts, share projects, update milestones, comment on others' work, request collaborations, and appear on a celebration wall when projects are completed. Features a live activity feed and is secured with Supabase Auth and PostgreSQL Row Level Security."
              ghLink="https://github.com/Kamogelo-Kedige/MzansiBuilds"
              demoLink="https://kamogelo-kedige.github.io/MzansiBuilds/index.html"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Contact Book App"
              description="A responsive digital contact management app built with HTML, CSS, and JavaScript. Powered by a REST API for data persistence, it supports adding, editing, and deleting contacts with profile pictures. Demonstrates DOM manipulation, event handling, and user-centric UI design."
              ghLink="https://github.com/Kamogelo-Kedige/Contact-Book-App"
              demoLink="https://kamogelo-kedige.github.io/Contact-Book-App/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={editor}
              title="Daily Deli 2.0"
              description="A B2C online grocery and deli e-commerce platform built with ASP.NET, SQL Server, and Bootstrap. Features dietary-aware product filtering, recipe-integrated shopping carts, dynamic weekly meal planning, a community blog hub, and a loyalty points system rewarding repeat shoppers."
              ghLink="https://github.com/Kamogelo-Kedige/Daily-Deli-2.0"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={leaf}
              title="Calculator App"
              description="An enhanced calculator web app built with HTML, CSS, and JavaScript. Supports basic arithmetic alongside advanced functions — square root, squaring, and percentages. Includes an ANS feature that stores and reuses the last result, plus a fully responsive UI optimised for all screen sizes."
              ghLink="https://github.com/Kamogelo-Kedige/My-Calculator-App"
              demoLink="https://kamogelo-kedige.github.io/My-Calculator-App/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={emotion}
              title="Portfolio Website"
              description="Personal portfolio site showcasing projects, skills, education, and contact information. Features a clean responsive layout with a light/dark theme toggle and glassmorphism-inspired card components. Built entirely with HTML5, CSS3 custom properties, and Vanilla JavaScript — no frameworks."
              ghLink="https://github.com/Kamogelo-Kedige/Portfolio-of-Kedige-Kamogelo"
              demoLink="https://kedigekamogelo.netlify.app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
