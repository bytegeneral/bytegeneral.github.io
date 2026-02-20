import React from "react";
import "./Footer.css"; // Make sure this file is correctly linked

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ftContent">
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Designed by{" "}
          <a href="https://github.com/bytegeneral" target="_blank" rel="noopener noreferrer">
            Me
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
