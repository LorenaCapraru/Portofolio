import React, { useState } from "react";
import "./Portofolio.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project5.png";
import project6 from "./project6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Portofolio = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    click === false ? setClick(true) : setClick(false);
  };

  return (
    <main className="portofolioContainer">
      <h1 className="headerH">PORTOFOLIO</h1>
      <h2 className="header2P">My Work</h2>
      <div className="containerP">
        <div className="elementP">
          <img alt="project 1" src={project1} />
        </div>

        <div className="elementP">
          <img alt="project 1" src={project2} />
        </div>

        <div className="elementP">
          {" "}
          <img alt="project 1" src={project3} />
        </div>
        <div className="elementP">
          {" "}
          <img alt="project 1" src={project4} />
        </div>
        <div className="elementP">
          {" "}
          <img alt="project 1" src={project5} />
        </div>
        <div className="elementP">
          {" "}
          <img alt="project 1" src={project6} />
        </div>
      </div>
    </main>
  );
};

export default Portofolio;
