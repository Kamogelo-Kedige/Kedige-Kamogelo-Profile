import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Profile Of Kedige Kamogelo.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const pdfPreviewUrl = `${pdf}#toolbar=0&navpanes=0&scrollbar=0`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div className="relative bg-gradient-to-bl from-black/60 to-[#0c0818e7] px-4 pb-8 pt-28 text-white md:px-8">
        <Particle />
        <div className="relative flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-[250px] items-center rounded-md bg-[#1a659e] px-4 py-2 text-white transition-colors hover:bg-[#6d20c5d7]"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>

        <div className="flex justify-center py-12">
          <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-6">
            <div className="mb-4 flex items-center justify-between px-2 text-sm text-white/70">
              <span>Resume preview</span>
              <span>Page 1</span>
            </div>
            <div className="flex justify-center overflow-hidden rounded-xl bg-white">
              <iframe
                title="Resume PDF preview"
                src={pdfPreviewUrl}
                className="h-[100vh] w-full"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex max-w-[250px] items-center rounded-md bg-[#1a659e] px-4 py-2 text-white transition-colors hover:bg-[#6d20c5d7]"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
