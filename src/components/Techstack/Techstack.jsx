import React from "react";
import "./Techstack.css";
import github from "../../assets/githubW.png";
import git from "../../assets/git.png";
import node from "../../assets/node.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import c from "../../assets/c.png";
import cpp from "../../assets/c++.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import postgres from "../../assets/postgres.png";
import mongodb from "../../assets/mongodb.png";
import linux from "../../assets/linux.png";
import vscode from "../../assets/vscode.png";
import react from "../../assets/react.svg"

const skills = [
  { name: "GitHub", icon: github },
  { name: "Git", icon: git },
  { name: "Node JS", icon: node },
  { name: "React", icon: react },
  { name: "JavaScript", icon: javascript },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "C", icon: c },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "PostgreSQL", icon: postgres },
  { name: "MongoDB", icon: mongodb },
  { name: "Linux", icon: linux },
  { name: "VS Code", icon: vscode },
];

// Duplicate the skills to ensure smooth infinite scroll
const doubledSkills = [...skills, ...skills];

const TechStack = () => {
  return (
    <div className="slider-container">
      <div className="tech-stack-slider">
        {doubledSkills.map((skill, index) => (
          <div className="tech" key={index}>
            <img src={skill.icon} alt={`${skill.name} icon`} className="tech-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
