import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from "/assets/githubW.png";
import linkedin from "/assets/Linkedin.png";
import "./Hero.css";
import HeroFloatingIcons from "./HeroFloatingIcons/HeroFloatingIcons";

export default function Hero() {
  const titles = ["Full Stack Developer", "Software & Web", "AI & ML"];
  const [index, setIndex] = useState(0);

  // Cycle titles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
       <HeroFloatingIcons />
      <div className="hero-content">
        {/* Name slides from top */}
        <motion.h1
          className="hero-title"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          GIOVANNI KASSIS
        </motion.h1>

        {/* Cycling Titles */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {titles[index]}
          </motion.p>
        </AnimatePresence>

        {/* Buttons & Socials */}
        <motion.div
          className="hero-buttons"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <div className="socials">
            <img
              className="social-icon"
              src={github}
              alt="GitHub"
              width="40px"
              onClick={() => window.open("https://github.com/g-kassis", "_blank")}
            />
            <img
              className="social-icon"
              src={linkedin}
              alt="LinkedIn"
              width="40px"
              onClick={() => window.open("https://www.linkedin.com/in/giovanni-kassis", "_blank")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
