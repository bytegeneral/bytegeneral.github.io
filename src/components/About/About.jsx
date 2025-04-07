import React, { useState, useEffect, useRef } from "react";
import aboutProfile from "../../assets/memoji.png"; // Adjust path if needed
import "./About.css"; // Ensure CSS is imported

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

const About = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.8 } // Trigger when 80% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="about">
      {/* Title Section */}
      <div className="title-box">
        <h1>About me</h1>
      </div>

      {/* Content Section */}
      <div className="about-sections">
        {/* Left Side - Profile Image */}
        <div className="about-left">
          <img src={aboutProfile} alt="Profile" />
        </div>

        {/* Right Side - Description & Skills */}
        <div className="about-right">
          <div className="about-para">
            <p>
            I am a Computer Science professional working on turning complex problems into elegant solutions. 
            From software engineering to machine learning, if it involves coding, I’m all in.
              Throughout my career, I have had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              I am a Full Stack Developer with expertise in both front end and back end technologies. 
              I have acquired a diverse set of tools and skills, ranging from programming languages to frameworks and libraries. 
              This arsenal allows me to tackle complex challenges, create innovative solutions, 
              and continuously push the boundaries of what's possible in the world of development.
            </p>
          </div>

          {/* Skills with Animation */}
          <div className="about-skills" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <hr
                  className={`skill-bar ${animate ? "fill" : ""}`}
                  style={{ "--bar-width": skill.width }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        {achievements.map((achieve, index) => (
          <React.Fragment key={index}>
            <div className="about-achievement">
              <h1>{achieve.value}</h1>
              <p>{achieve.label}</p>
            </div>
            {index < achievements.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default About;
