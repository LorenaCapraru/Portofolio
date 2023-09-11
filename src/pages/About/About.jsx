import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <main className="aboutH">
      <h1 className="headerH">ABOUT ME</h1>
      <h2 className="header2H">Background</h2>

      <div className="containerH">
        <div className="descriptionH">
          <h3>
            Hello, I'm <span className="name">Lorena Capraru</span>, a Full
            Stack Developer
          </h3>
          <p>
            Coding and problem-solving are my passions, and I pursue them
            through an immersive 1-year full stack software development training
            program at CodeYourFuture. There, I gain hands-on experience in
            <span className="pulseA"> HTML</span>,{" "}
            <span className="pulseA">CSS</span>,{" "}
            <span className="pulseA">JavaScript</span>,{" "}
            <span className="pulseA">React.js</span>,{" "}
            <span className="pulseA">Node.js</span>,{" "}
            <span className="pulseA">Express.js</span>, and{" "}
            <span className="pulseA">SQL</span>, collaborating with fellow
            trainees on various projects and practicing pair programming and
            teamwork. I also apply{" "}
            <span className="pulseA">Agile methodologies</span> and best
            practices to ensure efficient project delivery, and actively learn
            and stay up-to-date with the latest technologies and industry
            trends, such as <span className="pulseA">Next.js</span>,{" "}
            <span className="pulseA">Tailwind</span>, and{" "}
            <span className="pulseA">Prisma</span>. Additionally, I contribute
            to open-source projects and engage in community-driven initiatives.
          </p>
          <br />
          <p>
            {" "}
            I graduated from <span className="pulseA">
              Falmouth University
            </span>{" "}
            with a <span className="pulseA">BSc in Computing</span> in February
            2023, where I developed a solid foundation in software development
            principles and practices. One of my most rewarding projects was my
            dissertation, where I created an{" "}
            <span className="pulseA">
              intelligent door lock based on vocal recognition
            </span>
            using cutting-edge technologies and innovative solutions. Another
            significant accomplishment was my final project at{" "}
            <span className="pulseA">CodeYourFuture</span>, where I built a web
            application with a team of talented developers, delivering
            high-quality code within tight deadlines and gaining valuable
            insights into <span className="pulseA">teamwork</span> dynamics,
            <span className="pulseA">communication</span>, and{" "}
            <span className="pulseA">collaboration</span>. My goal is to turn
            concepts into applications that make a positive impact on the world.
          </p>
        </div>
        <div className="dataH">
          <p>
            <b>Name:</b> Lorena Capraru
          </p>
          <hr />

          <p>
            <b>Gmail:</b> <span className="name">lorenacapraru@gmail.com</span>
          </p>
          <hr />

          <p>
            <b>Location:</b> London
          </p>
          <hr />

          <div className="socialsA">
            <a
              href="https://www.linkedin.com/in/lorena-capraru"
              className="socialA"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social2A" />
            </a>
            <a href="https://github.com/LorenaCapraru">
              <FontAwesomeIcon icon={faGithub} className="socialA" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
