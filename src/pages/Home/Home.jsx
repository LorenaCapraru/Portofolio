import Logo from "./1.png";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <p className="roleH">full.stack.developer</p>
      <img className="logoH" src={Logo} alt="React Logo" />
      <p className="nameH">by Lorena C.</p>
      <p className="placeH">LONDON BASED</p>
      <button className="buttonH">Get in touch</button>
      <div class="arrowH">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
};

export default Home;
