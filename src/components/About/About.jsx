import React, { useState, useEffect, useRef } from "react";
import aboutProfile from "/assets/memoji.png"; // Adjust path
import { motion } from "framer-motion";
import "./About.css";

const skills = [
  { name: "HTML & CSS", width: "65%" },
  { name: "JavaScript", width: "95%" },
  { name: "React JS", width: "70%" },
  { name: "Python", width: "100%" },
];

const achievements = [
  { value: "7+", label: "YEARS OF EXPERIENCE" },
  { value: "100+", label: "PROJECTS COMPLETED" },
  { value: "15+", label: "HAPPY CLIENTS" },
];

export default function About() {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-container">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        {/* Profile Image */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutProfile} alt="Profile" />
        </motion.div>

        {/* Description + Skills */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-para">
            <p>
              I am a Computer Science professional turning complex problems
              into elegant solutions. From software engineering to machine
              learning, if it involves coding, I’m all in.
            </p>
            <p>
              As a Full Stack Developer, I specialize in both front-end and
              back-end technologies. My toolkit allows me to create innovative
              solutions and continuously push the boundaries of what’s
              possible.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills" ref={skillsRef}>
            {skills.map((skill, i) => (
              <div key={i} className="about-skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    animate={{ width: animate ? skill.width : 0 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
