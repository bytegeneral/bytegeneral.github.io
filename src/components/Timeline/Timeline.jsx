import React from "react";
import { motion } from "framer-motion";
import "./Timeline.css";

const milestones = [
  { year: "2017", title: "Started Programming", desc: "Learned HTML, CSS, JavaScript & Python." },
  { year: "2019", title: "Robotics Enthusiast", desc: "Programmed robots in Java and won 2nd place in Destination: Deep Space by Boeing." },
  { year: "2020", title: "First Co-op", desc: "Worked as a software tester, gaining hands-on experience in QA." },
  { year: "2021", title: "Networking Fundamentals", desc: "Studied networking concepts and protocols, including routing and switching" },
  { year: "2022", title: "Full Stack Developer", desc: "Built and deployed full-stack web applications using modern technologies." },
  { year: "2023", title: "Python & Machine Learning", desc: "Developed automation scripts and machine learning projects in Python." },
  { year: "2024", title: "Teaching Assistant - Operating Systems", desc: "Assisted in teaching university-level Operating Systems course." },
  { year: "2025", title: "Bachelor's in Computer Science", desc: "Graduated High Distinction with a degree in Computer Science, ready for professional challenges." },
];


export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-header">
        <h2>My Journey</h2>
        <p>A timeline of key milestones in my career</p>
      </div>

      <div className="journey-wrapper">
        <div className="journey-container">
          <div className="timeline-line" />
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{milestone.year}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator arrow */}
        <motion.div
          className="scroll-arrow"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ➤
        </motion.div>
      </div>
    </section>
  );
}
