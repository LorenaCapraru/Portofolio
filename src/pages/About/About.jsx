import React from "react";
import "./About.css";
const About = () => {
  return (
    <main className="aboutH">
      <h1 className="headerH">ABOUT ME</h1>
      <h2 className="header2H">Background</h2>
      <h3>
        Hello, I'm <span className="name">Lorena Capraru</span>, a Full Stack
        Developer
      </h3>
      <div className="containerH">
        <div className="descriptionH">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="dataH">
          <p>Location: London</p>
        </div>
      </div>
    </main>
  );
};

export default About;
