import React, { useState, useEffect } from "react";
import github from "../../assets/githubW.png";
import "./Portfolio.css";

import aed from "../../assets/aed.jpeg";
import brainiac from "../../assets/brainiac.jpg";
import fitness from "../../assets/fitness.jpg";
import dory from "../../assets/dory.jpeg";
import movie from "../../assets/movieDB.png";

const projects = [
  {
    projectName: "AED Assistant",
    description: {
      default: "Software simulation that mimics the core functionality of an AED Plus (Automated External Defibrillator Plus) device allowing users to perform actions such as analyzing heart rhythms, providing electric shocks, and offering guidance during an emergency. Designed with the goal of developing a simplified software simulation of the AED Plus device to demonstrate its functionality and provide user interaction.",
      mobile: "Software simulation that mimics the core functionality of an AED Plus (Automated External Defibrillator Plus) device",
    },
    githubLink: "https://www.github.com/g-kassis/",
    imgSrc: aed,
  },
  {
    projectName: "Brainiac",
    description: {
      default: "3D Simulation for brain shift using Python, PyVista, and NumPy. Providing a simulated environment that mimics real world scenarios in the operating room through the use of the BraTS 2020 dataset, which includes the segmentation of brain tumors in multimodal magnetic resonance imaging (MRI) scans.",
      mobile: "3D Simulation for brain shift using Python, PyVista, and NumPy. Providing a simulated environment that mimics real world scenarios in the operating room",
    },
    githubLink: "https://www.github.com/g-kassis/",
    imgSrc: brainiac,
  },
  {
    projectName: "Fitness Tracker",
    description: {
      default: "A Fitness Club Management System using SQL, Javascript, HTML, and CSS. Serving as a comprehensive platform catering to the diverse needs of club members, trainers, and administrative staff. Members have access to a personalized dashboard tracking exercise routines, fitness achievements, and health statistics. With the ability to schedule, reschedule, or cancel personal training sessions with certified trainers. Including many other services.",
      mobile: "A Fitness Club Management System using SQL, Javascript, HTML, and CSS. Serving as a comprehensive platform catering to the diverse needs of club members, trainers, and administrative staff",
    },
    githubLink: "https://www.github.com/g-kassis/",
    imgSrc: fitness,
  },
  {
    projectName: "Dory AI",
    description: {
      default: "Project Dory is an AI model designed to classify marine mammals from sound data utilizing deep learning techniques, such as convolutional neural networks (CNNs), and Mel-frequency cepstral coefficients (MFCCs) to classify the features of the audio data based on time and frequency. Trained on the Watkins Marine Mammal Sound Database which contains the labeled recordings of over 60 different marine mammals collected over 7 decades.",
      mobile: "An AI model designed to classify marine mammals from sound data utilizing deep learning techniques",
    },
    githubLink: "https://www.github.com/g-kassis/",
    imgSrc: dory,
  },
  {
    projectName: "Movie Database",
    description: {
      default: "A full-stack web application that allows users to search for TV shows and retrieve detailed information using an external TV show API. Built using Vanilla JavaScript, HTML, and CSS for the front end, while the back end is powered by Node.js, Express.js, and MongoDB for user authentication. Displays information such as the title, genre, release date, cast, summary, and ratings.",
      mobile: "A full-stack web application that allows users to search for TV shows and retrieve detailed information using an external TV show API.",
    },
    githubLink: "https://www.github.com/g-kassis/",
    imgSrc: movie,
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1250);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>Latest Work</h1>
      </div>

      <div className="mywork-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${hoveredIndex === index ? "active" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => window.location.href = project.githubLink}
          >
            <img src={project.imgSrc} alt={project.projectName} />
            <div className="overlay">
              <h2>{project.projectName}</h2>
              <p>{isMobile ? project.description.mobile : project.description.default}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork-showmore" onClick={() => window.location.href = 'https://www.github.com/g-kassis'}>
        <p>Show More</p>
        <img src={github} alt="GitHub" />
      </div>
    </div>
  );
};

export default Portfolio;
