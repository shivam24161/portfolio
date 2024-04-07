import React from "react";
import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer__container" style={{minHeight:"120px"}}>
      <div className="footer__logo footer__socials pt-4">
        <a href="https://www.linkedin.com/in/shivam24161">
          <BsLinkedin size={20} />
        </a>
        <a href="https://github.com/shivam24161">
          <BsGithub size={20} />
        </a>
        <a href="https://instagram.com/shivam24161">
          <BsMedium size={20} />
        </a>
      </div>

      <div className="footer__copyright">
        <small className="text-size-12 mb-8">&copy; Shivam Yadav. All rightts reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
