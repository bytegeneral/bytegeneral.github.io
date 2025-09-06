import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HeroFloatingIcons.css";

// Tech icons
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
import react from "/assets/techstack/react.svg";

const techIcons = [
  github, git, node, javascript, html, css, c, cpp,
  python, java, postgres, mongodb, linux, vscode, react
];

export default function HeroFloatingIcons() {
  const [icons, setIcons] = useState([]);

  // Spawn icons continuously
  useEffect(() => {
    const interval = setInterval(() => {
      const icon = {
        id: Date.now() + Math.random(), // unique key
        src: techIcons[Math.floor(Math.random() * techIcons.length)],
        x: Math.random() * 90 + 5, // horizontal position
        size: Math.random() * 40 + 30, // size 30-70px
        duration: 3 + Math.random() * 2, // fall duration
      };
      setIcons((prev) => [...prev, icon]);
    }, 400); // spawn a new icon every 400ms

    return () => clearInterval(interval);
  }, []);

  // Remove icons after they finish falling
  const handleComplete = (id) => {
    setIcons((prev) => prev.filter((icon) => icon.id !== id));
  };

  const viewportHeight = window.innerHeight;

  return (
    <div className="floating-icons-container">
      {icons.map((icon) => (
        <motion.img
          key={icon.id}
          src={icon.src}
          alt="tech-icon"
          className="floating-icon"
          style={{ left: `${icon.x}%`, width: icon.size, height: icon.size }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{ y: viewportHeight + 50, opacity: 1, rotate: 360 }}
          transition={{ duration: icon.duration, ease: "linear" }}
          onAnimationComplete={() => handleComplete(icon.id)}
        />
      ))}
    </div>
  );
}
