import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        navColour
          ? "bg-[#1b1a2ee6] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between py-2">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-6 w-10 object-contain" alt="brand" />
          </a>

          <button
            aria-label="Toggle navigation"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1 md:hidden"
            onClick={() => updateExpanded(!expand)}
            type="button"
          >
            <span
              className={`block h-0.5 w-6 bg-violet-400 transition-transform duration-300 ${expand ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-violet-400 transition-opacity duration-300 ${expand ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-violet-400 transition-transform duration-300 ${expand ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </button>

          <ul className="hidden items-center gap-2 md:flex md:flex-row">
            <li>
              <Link
                className="inline-flex items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-violet-500/30 px-3 py-2 text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500/50"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </a>
            </li>
          </ul>
        </div>

        {expand && (
          <ul className="space-y-2 pb-4 md:hidden">
            <li>
              <Link
                className="inline-flex w-full items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex w-full items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex w-full items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex w-full items-center gap-1 rounded px-3 py-2 text-white transition-colors hover:bg-violet-500/20"
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
