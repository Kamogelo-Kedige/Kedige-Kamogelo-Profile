import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Profile Of Kedige Kamogelo.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
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
