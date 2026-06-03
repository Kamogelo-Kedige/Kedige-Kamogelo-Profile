import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full bg-[rgb(10,4,22)] px-4 py-3 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 text-center md:grid-cols-3 md:items-center">
        <div>
          <h3 className="my-2 text-base text-white">
            Designed and Developed by Soumyajit Behera
          </h3>
        </div>
        <div>
          <h3 className="my-2 text-base text-white">Copyright © {year} SB</h3>
        </div>
        <div>
          <ul className="my-2 flex items-center justify-center gap-6 p-0">
            <li>
              <a
                href="https://github.com/soumyajit4419"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Soumyajit4419"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/soumyajit4419"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
