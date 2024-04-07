import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <h2 className="text-size-24">About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" size={24}/>
              <h5 className="text-size-16">Degree</h5>
              <small className="text-size-12">B.Tech(Computer Science and Engineering)</small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" size={24}/>
              <h5 className="text-size-16">GPA</h5>
              <small className="text-size-12">8.4</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" size={24}/>
              <h5 className="text-size-16">Domains</h5>
              <small>
                <ul>
                  <li className="text-size-12">Frontend Development</li>
                  <li className="text-size-12">Backend Development</li>
                </ul>
              </small>
            </article>
          </div>
          {/* <p>
                    I'm a <b>Software Engineering Undergradute</b> at the University of Kelaniya. 
                    I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in software engineering and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
