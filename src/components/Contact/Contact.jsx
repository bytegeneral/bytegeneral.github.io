import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import linkedin from "/assets/Linkedin.png";
import github from "/assets/githubW.png";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // reset when out of view
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        {/* Left Info */}
        <div className="contact-info">
          <div className="contact-header">
            <h2>Contact Me</h2>
            <p>Let's build something amazing together</p>
          </div>
          <p
            ref={textRef}
            className={`contact-text ${animate ? "slide-in" : ""}`}
          >
            Whether you're looking for a project partner or want to hire me
            for a custom solution, feel free to reach out. I’m open to
            collaborations, new opportunities, and exciting challenges.
          </p>

          <div className="contact-socials">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="social-icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/giovanni-kassis",
                  "_blank"
                )
              }
            />
            <img
              src={github}
              alt="GitHub"
              className="social-icon"
              onClick={() =>
                window.open("https://www.github.com/g-kassis", "_blank")
              }
            />
          </div>
        </div>

        {/* Right Form */}
        <form
          action="https://formspree.io/f/xpwwjpnb"
          method="post"
          className="contact-form"
        >
          <input name="name" type="text" placeholder="Name (optional)" />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="number" type="tel" placeholder="Phone # (optional)" />
          <textarea name="message" placeholder="Message" required />
          <button type="submit" className="contact-btn">
            Send <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
