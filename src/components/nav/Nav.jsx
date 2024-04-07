import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import "./nav.scss";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome size={20} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUser size={20} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaLaptopCode size={20} />
      </a>
      <a
        href="#myprojects"
        onClick={() => setActiveNav("#myprojects")}
        className={activeNav === "#myprojects" ? "active" : ""}
      >
        <GoChecklist size={20} />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
      >
        <BiMessageSquareDetail size={20} />
      </a>
    </nav>
  );
};

export default Nav;
