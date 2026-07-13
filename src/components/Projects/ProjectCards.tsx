import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type ProjectCardProps = {
  imgPaths: string[];
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
};

function ProjectCards(props: ProjectCardProps) {
  const [current, setCurrent] = useState(0);
  const total = props.imgPaths.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % total);
  };

  return (
    <div className="h-full rounded-lg border border-white/10 bg-black/20 p-5 text-white shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] opacity-90 transition-all duration-500 hover:scale-[1.02] hover:shadow-[#3b91d3]">
      {/* ── Slideshow ── */}
      <div
        className="relative w-full overflow-hidden rounded-md"
        style={{ height: "200px" }}
      >
        {/* Sliding strip */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / total}%)`,
            width: `${total * 100}%`,
          }}
        >
          {props.imgPaths.map((src, i) => (
            <div
              key={i}
              className="h-full flex-shrink-0"
              style={{ width: `${100 / total}%` }}
            >
              <img
                src={src}
                alt={`${props.title} screenshot ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient so dots are readable */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Prev / Next — only when multiple images */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Previous image"
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Next image"
            >
              <HiChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
          {props.imgPaths.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "h-2 w-4 bg-purple-400"
                  : "h-2 w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Card body ── */}
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
