import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
      className="mx-auto flex w-full max-w-5xl flex-col items-center"
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Github <strong className="purple">Calendar</strong>
      </h1>
      <GitHubCalendar
        username="Kamogelo-Kedige"
        blockSize={30}
        blockMargin={10}
        color="#1a659e"
        fontSize={20}
      />
    </div>
  );
}

export default Github;
