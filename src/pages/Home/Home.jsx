import React from "react";
import "./Home.css";
import { scroller } from "react-scroll";

const Home = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    scroller.scrollTo("contact", {
      duration: 1200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToAbout = (e) => {
    e.preventDefault();

    scroller.scrollTo("about", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    // <Element name="home">
    <main className="home">
      <p className="roleH">full.stack.developer</p>
      {/* <img className="logoH" src={Logo} alt="React Logo" /> */}
      <p className="nameH">by Lorena C.</p>
      <p className="placeH">LONDON BASED</p>
      <button className="buttonH" onClick={scrollToContact}>
        Get in touch
      </button>
      <div class="arrowH" onClick={scrollToAbout}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
    // </Element>
  );
};

export default Home;
