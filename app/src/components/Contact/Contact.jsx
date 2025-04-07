import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import linkedin from "../../assets/Linkedin.png";
import github from "../../assets/githubW.png";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the text is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-background">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="contact-title">Contact Me</h2>
            <div 
              className={`contact-text ${animate ? "slide-in" : ""}`} 
              ref={textRef}
            >
              Whether you're seeking a project partner or looking to hire me for
              specialized services, I'm ready to collaborate. Let's connect and
              explore how I can contribute to your next big idea.
            </div>
            <div className="contact-socials">
              <img src={linkedin} alt="LinkedIn" className="social-icon" width="40px" onClick={() => window.location.href = 'https://www.github.com/g-kassis'} />
              <img src={github} alt="GitHub" className="social-icon" width="40px" onClick={() => window.location.href = 'https://www.linkedin.com/in/giovanni-kassis'} />
            </div>
          </div>
          <br />
          <div className="contact-right">
            <form
              action="https://formspree.io/f/xpwwjpnb"
              method="post"
              className="contact-form"
            >
              <input name="name" type="text" className="contact-input" placeholder="Name (optional)" />
              <input name="email" type="email" className="contact-input" placeholder="Your Email" required />
              <input name="number" type="tel" className="contact-input" placeholder="Phone # (optional)" />
              <textarea name="message" className="contact-input message" placeholder="Message" required></textarea>
              <div type="submit" className="contact-button">
                <p>Send</p>
                <p className="chevron-right"> &#8250;</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
