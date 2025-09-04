import React from "react";
import "./Techstack.css";
import github from "/assets/githubW.png";
import git from "/assets/techstack/git.png";
import node from "/assets/techstack/node.png";
import javascript from "/assets/techstack/javascript.png";
import html from "/assets/techstack/html.png";
import css from "/assets/techstack/css.png";
import c from "/assets/techstack/c.png";
import cpp from "/assets/techstack/c++.png";
import python from "/assets/techstack/python.png";
import java from "/assets/techstack/java.png";
import postgres from "/assets/techstack/postgres.png";
import mongodb from "/assets/techstack/mongodb.png";
import linux from "/assets/techstack/linux.png";
import vscode from "/assets/techstack/vscode.png";
import react from "/assets/techstack/react.svg"

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
