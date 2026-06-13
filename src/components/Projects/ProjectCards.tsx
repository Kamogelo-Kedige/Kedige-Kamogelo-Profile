import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
};

function ProjectCards(props: ProjectCardProps) {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-black/20 p-4 text-white shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] opacity-90 transition-all duration-500 hover:scale-[1.02] hover:shadow-[#3b91d3]">
      <img src={props.imgPath} alt="card-img" className="w-full rounded-md" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white">{props.title}</h3>
        <p className="mt-3 text-justify text-white/90">{props.description}</p>
        <a
          href={props.ghLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#1a659e] px-4 py-2 text-white transition-colors hover:bg-[#398ecf]"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </a>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <a
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-[#1a659e] px-4 py-2 text-white transition-colors hover:bg-[#398ecf]"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectCards;
