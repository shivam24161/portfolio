import React from "react";
import "./header.scss";
import Typewriter from '../Typewriter/TypeWriter'
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5 className="text-size-14">Hello, I'm</h5>
        <h1 className="text-size-40">Shivam Yadav</h1>
        <h5 className="text-light text-size-22"><Typewriter/></h5>
          {/* <a href="#contacts" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  );
};

export default Header;
