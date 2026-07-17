import React from "react";

function AboutCard() {
  return (
    <div className="quote-card-view rounded-lg border border-white/10 p-6 text-left">
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          I’m Kamogelo Kedige, a final-year Computer Science and Informatics
          student at the University of Johannesburg with experience building
          full-stack applications and collaborating on real software projects.
          I’ve earned Top Achiever recognition, UJenius Top 1% recognition, and
          a Golden Key International Honour Society distinction during my
          studies.
          <br />
          <br />
          <span className="purple">Education:</span> BSc in IT in Computer
          Science and Informatics, expected completion in 2026 at the University
          of Johannesburg.
          <br />
          <span className="purple">Focus:</span> Full-stack development,
          software engineering, databases, and web application development.
          <br />
          <br />
        </p>
      </blockquote>
    </div>
  );
}

export default AboutCard;
