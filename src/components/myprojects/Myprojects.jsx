import React from "react";
import { myProjectsData } from "./Data";
import "./myprojects.scss";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h2 className="text-size-24">Personal Projects</h2>

      <div className="container portfolio__container">
        {myProjectsData.map((item, index) => {
          const check = item.technology.includes("Php");
          return (
            <article key={item.name} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.path} alt="project-img" />
              </div>
              <h3 className="text-size-16">{item.name}</h3>
              {item.technology.map((ele, ind) => (
                <small key={ind} className="text-light text-size-14">
                  {ele} {item.technology.length - 1 !== ind && "| "}
                </small>
              ))}
              <div className="portfolio__item-cta">
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                {!check && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Myprojects;
