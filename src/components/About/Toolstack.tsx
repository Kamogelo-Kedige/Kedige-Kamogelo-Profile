import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

type ToolItem = {
  icon: string;
  alt: string;
  label: string;
};

function Toolstack() {
  const tools: ToolItem[] = [
    { icon: macOs, alt: "macOs", label: "Mac Os" },
    { icon: chrome, alt: "Chrome", label: "Google Chrome" },
    { icon: vsCode, alt: "vsCode", label: "Vs Code" },
    { icon: intelliJ, alt: "intelliJ", label: "IntelliJ" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-2 md:grid-cols-4">
      {tools.map((tool) => (
        <div
          key={tool.label}
          className="flex items-center justify-center gap-3 rounded-2xl border border-fuchsia-300/60 px-5 py-3 text-white shadow-[4px_5px_4px_3px_rgba(89,4,168,0.137)] transition-all hover:scale-105 hover:border-fuchsia-300"
        >
          <img src={tool.icon} alt={tool.alt} className="h-6 w-6" />
          <div>{tool.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
