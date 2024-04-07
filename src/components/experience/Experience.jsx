import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { myExperiance } from "./MyExperiance";
import "./experience.scss";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-size-24">My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 className="text-size-18">Frontend Technologies</h3>

          <div className="experience__content">
            {myExperiance.map((item) => {
              const checkFrontendTech = !item.type;
              if (!checkFrontendTech) return;
              return (
                <article key={item.technology} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4 className="text-size-16">{item.technology}</h4>
                    <small className="text-light text-size-12">
                      {item.level}
                    </small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* End of frontend part */}

        <div className="experience__backend">
          <h3 className="text-size-18">Backend Technologies</h3>
          <div className="experience__content">
            {myExperiance.map((item, index) => {
              const checkFrontendTech = !item.type;
              if (checkFrontendTech) return;
              return (
                <article key={item.technology} className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4 className="text-size-16">{item.technology}</h4>
                    <small className="text-light text-size-12">
                      {item.level}
                    </small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
