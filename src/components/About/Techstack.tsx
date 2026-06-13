import React from "react";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

type TechItem = {
  icon: React.ReactNode;
  label: string;
};

function Techstack() {
  const techItems: TechItem[] = [
    { icon: <img src={C} alt="C++" />, label: "C++" },
    { icon: <img src={Javascript} alt="javascript" />, label: "Javascript" },
    { icon: <img src={Typescript} alt="typescript" />, label: "Typescript" },
    { icon: <img src={ReactIcon} alt="react" />, label: "React.Js" },
    { icon: <img src={Git} alt="git" />, label: "Git" },
    { icon: <img src={Firebase} alt="Supabase" />, label: "Supabase" },
    { icon: <img src={Redis} alt="redis" />, label: "Redis" },
    { icon: <img src={Docker} alt="docker" />, label: "Docker" },
    { icon: <img src={SQL} alt="SQL" />, label: "Postgresql" },
    { icon: <img src={Java} alt="java" />, label: "Java" },

    { icon: <img src={Tailwind} alt="tailwind" />, label: "Tailwind CSS" },
    { icon: <img src={MUI} alt="mui" />, label: "Material UI" },
    { icon: <img src={Postman} alt="Postman" />, label: "Postman" },
    { icon: <img src={vsCode} alt="vsCode" />, label: "Vs Code" },
    { icon: <img src={intelliJ} alt="intelliJ" />, label: "IntelliJ" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {techItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-center gap-3 rounded-2xl border border-fuchsia-300/60 px-5 py-3 text-white shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] transition-all hover:scale-105 hover:border-fuchsia-300"
        >
          <span className="flex h-6 w-6 items-center justify-center">
            {item.icon}
          </span>
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
