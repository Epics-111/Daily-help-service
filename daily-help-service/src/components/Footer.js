import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Daily Help. All Rights Reserved.</p>
      <p>Contact us: support@dailyhelp.com</p>
    </footer>
  );
};

export default Footer;
