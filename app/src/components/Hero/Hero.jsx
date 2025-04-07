import React, { useState, useEffect } from "react";
import "./Hero.css";
import github from "../../assets/githubW.png";
import linkedin from "../../assets/Linkedin.png";

const Hero = () => {
    const titles = ["WEB DEVELOPMENT", "SOFTWARE DEVELOPMENT", "ARTIFICIAL INTELLIGENCE"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            {/* <img src={memoji} alt="" width='250px'/> */}
            <h1>GIOVANNI KASSIS</h1>
            <p>{titles[index]}</p>
            <br/>
            <hr />
            <div className="socials">
                <img className="social-icon" src={github} alt="GitHub" width='40px' onClick={() => window.location.href = 'https://www.github.com/g-kassis'}/>
                <img className="social-icon" src={linkedin} alt="LinkedIn" width='40px' onClick={() => window.location.href = 'https://www.linkedin.com/in/giovanni-kassis'}/>
            </div>
        </div>
    );
};

export default Hero;
