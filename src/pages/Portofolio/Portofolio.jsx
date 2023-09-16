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
import { Element } from "react-scroll";

const Portofolio = () => {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);

  const handleClick1 = () => {
    click1 === false ? setClick1(true) : setClick1(false);
  };
  const handleClick2 = () => {
    click2 === false ? setClick2(true) : setClick2(false);
  };
  const handleClick3 = () => {
    click3 === false ? setClick3(true) : setClick3(false);
  };
  const handleClick4 = () => {
    click4 === false ? setClick4(true) : setClick4(false);
  };
  const handleClick5 = () => {
    click5 === false ? setClick5(true) : setClick5(false);
  };
  const handleClick6 = () => {
    click6 === false ? setClick6(true) : setClick6(false);
  };

  return (
    <Element name="portofolio">
      <main className="portofolioContainer">
        <div className="titleContainer">
          <h1 className="headerH">PORTOFOLIO</h1>
          <h2 className="header2H">My Work</h2>
        </div>
        <div className="containerP">
          <div
            className={click1 === false ? "elementP" : "backP"}
            onClick={handleClick1}
          >
            {click1 === false ? (
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
                  <a
                    href="https://github.com/momahboobian/gh-profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://gh-profilo.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className={click2 === false ? "elementP" : "backP"}
            onClick={handleClick2}
          >
            {click2 === false ? (
              <img alt="project 1" src={project2} />
            ) : (
              <div className="backCard">
                <div className="detailsP">
                  <h2 className="nameP">GitHub Pull Requests Tracker</h2>
                  <p>
                    <b>Tech Stack: </b>Next.js, Prisma, Tailwind
                  </p>
                </div>
                <div className="socialMediaP">
                  <a
                    href="https://github.com/LorenaCapraru/Final-Project-Tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://good-pr.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className={click3 === false ? "elementP" : "backP"}
            onClick={handleClick3}
          >
            {click3 === false ? (
              <img alt="project 1" src={project3} />
            ) : (
              <div className="backCard">
                <div className="detailsP">
                  <h2 className="nameP">Rock-Paper-Scissors Game</h2>
                  <p>
                    <b>Tech Stack: </b>React.js, Node.js, Socket.io
                  </p>
                </div>
                <div className="socialMediaP">
                  <a
                    href="https://github.com/LorenaCapraru/team-game-rock-paper-scissors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://rock-paper-scissors-team.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className={click4 === false ? "elementP" : "backP"}
            onClick={handleClick4}
          >
            {click4 === false ? (
              <img alt="project 1" src={project4} />
            ) : (
              <div className="backCard">
                <div className="detailsP">
                  <h2 className="nameP">Videos Recommendation</h2>
                  <p>
                    <b>Tech Stack: </b>React.js, Node.js, PostgreSQL
                  </p>
                </div>
                <div className="socialMediaP">
                  <a
                    href="https://github.com/LorenaCapraru/Full-Stack-Project-Assessment"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://cyf-lorenacapraru-tfl-lines-react.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            className={click5 === false ? "elementP" : "backP"}
            onClick={handleClick5}
          >
            {click5 === false ? (
              <img alt="project 1" src={project5} />
            ) : (
              <div className="backCard">
                <div className="detailsP">
                  <h2 className="nameP">TV Shows</h2>
                  <p>
                    <b>Tech Stack: </b>HTML, CSS, JavaScript DOM
                  </p>
                </div>
                <div className="socialMediaP">
                  <a
                    href="https://github.com/LorenaCapraru/tv-show-dom-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://cyf-lorenacapraru-tv.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div
            className={click6 === false ? "elementP" : "backP"}
            onClick={handleClick6}
          >
            {click6 === false ? (
              <img alt="project 1" src={project6} />
            ) : (
              <div className="backCard">
                <div className="detailsP">
                  <h2 className="nameP">Baby Names Pickers</h2>
                  <p>
                    <b>Tech Stack: </b>React.js, CSS, HTML
                  </p>
                </div>
                <div className="socialMediaP">
                  <a
                    href="https://github.com/LorenaCapraru/baby-names-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="socialP" />
                  </a>
                  <a
                    href="https://cyf-lorenacapraru-baby-names.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faRocket} className="socialP" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Element>
  );
};

export default Portofolio;
