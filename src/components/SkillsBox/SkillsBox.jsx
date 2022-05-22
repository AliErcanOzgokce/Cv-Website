import React from "react";
import "./style.css";
const SkillsBox = () => {
  const Skills = {
    Web3Skills: [
      "Solidity",
      "Truffle",
      "Ganache",
      "Golang",
      "HTML-CSS",
      "JavaScript",
      "React",
    ],
    HighLevelProgramming: ["C++/C", "Golang", "Python", "JavaScript", "Algorithms"],
    Extras: ["Linux", "Atom", "Remix-IDE" ,"GIT and GitHub",],
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>As Blockchain-Developer</h3>
          <ul>
            {Skills.Web3Skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>High-Level Programming</h3>
          <ul>
            {Skills.HighLevelProgramming.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Extras</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;
