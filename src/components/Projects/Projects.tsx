import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <div className="relative bg-gradient-to-bl from-black/60 to-[#0c0818e7] pb-8 pt-36">
      <Particle />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h1 className="pt-2 text-center text-4xl font-medium text-white md:text-[2.3em]">
          Projects Ive<strong className="purple"> Worked on </strong>
        </h1>

        <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MzansiBuilds"
              description="MzansiBuilds is a developer collaboration platform where users can create accounts, build and manage projects, add milestones, comment on work, and request collaborations. It also includes a live activity feed and a celebration wall for completed projects. Built using Supabase Auth and PostgreSQL with Row Level Security"
              ghLink="https://github.com/Kamogelo-Kedige/MzansiBuilds"
              demoLink="https://chatify-49.web.app/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </div>

          <div className="px-2 py-2 md:px-3 md:py-3">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted various human emotions and reached 60.1% accuracy. Then used OpenCV to detect faces in images and pass detected faces to the classifier for emotion prediction."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
