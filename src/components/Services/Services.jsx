import React, { useEffect, useRef } from "react";
import "./Services.css";
import software from "/assets/services/software.png";
import webDevelopment from "/assets/services/web-development.png";
import consulting from "/assets/services/consulting.png";
import databases from "/assets/services/databases.png";
import cybersecurity from "/assets/services/cybersecurity.png";
import tutoring from "/assets/services/tutoring.png";

const services = [
    {
        id: "01",
        img: software,
        title: "Software Development",
        description: "Building robust desktop applications using languages like C++, Java, or Python"
    },
    {
        id: "02",
        img: webDevelopment,
        title: "Web Development",
        description: "Full-stack development using technologies like HTML, CSS, JavaScript, React, Angular, Node.js"
    },
    {
        id: "03",
        img: consulting,
        title: "Software Consulting",
        description: "Providing strategic advice on technology adoption, system architecture, and digital transformation"
    },
    {
        id: "04",
        img: databases,
        title: "Database Management",
        description: "Designing and managing databases like PostgreSQL and MongoDB"
    },
    {
        id: "05",
        img: cybersecurity,
        title: "Cybersecurity",
        description: "Conducting security assessments and penetration testing to identify vulnerabilities. Securing applications, databases, and authentication"
    },
    {
        id: "06",
        img: tutoring,
        title: "Tutoring",
        description: "Basics of programming in languages like Python, Java, C++, or JavaScript. Understanding algorithms, data structures, and object-oriented programming"
    }
];

const Services = () => {
    const serviceRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.3 } // Triggers when 30% of the element is in view
        );

        serviceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            serviceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="services-container">
            <h2 className="services-title">My <span className="highlight">Services</span></h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div 
                        ref={(el) => (serviceRefs.current[index] = el)}
                        className="service-card slide-up" 
                        key={service.id} 
                        onClick={() => document.getElementsByClassName('contact-container')[0].scrollIntoView({ behavior: "smooth" })}
                    >
                        <span className="service-number">{service.id}</span>
                        <img className="service-image" src={service.img} alt={service.title} />
                        <p className="service-title"><span className="gradient-text">{service.title}</span></p>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="hireme" onClick={() => document.getElementsByClassName('contact-container')[0].scrollIntoView({ behavior: "smooth" })}>
                <p>Hire Me </p>
                <p className="chevron-right">  &#8250;</p>
            </div>
        </div>
    );
};

export default Services;
