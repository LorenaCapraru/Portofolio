import React, { useState } from "react";
import "./Portofolio.css";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import project4 from "./project4.png";
import project5 from "./project5.png";
import project6 from "./project6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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
        <div
          className={click === false ? "elementP" : "backP"}
          onClick={handleClick}
        >
          {click === false ? (
            <img alt="project 1" src={project1} />
          ) : (
            <div className="backCard">
              <div className="detailsP">
                <h2 className="nameP">GitHub Commits Tracker</h2>
                <p>
                  <b>Tech Stack: </b>Next.js, Prisma, Tailwind
                </p>
              </div>
              <div className="socialMediaP">
                <a href="https://github.com/momahboobian/gh-profile">
                  <FontAwesomeIcon icon={faGithub} className="socialP" />
                </a>
                <a href="https://gh-profilo.vercel.app/">
                  <FontAwesomeIcon icon={faRocket} className="socialP" />
                </a>
              </div>
            </div>
          )}
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
