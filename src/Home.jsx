import Logo from "./1.png";
import React from "react";
const Home = () => {
  return (
    <main className="home">
      <p className="roleH">full.stack.developer</p>
      <img className="logoH" src={Logo} alt="React Logo" />
      <p className="nameH">by Lorena C.</p>
      <hr />

      <p className="placeH">LONDON BASED</p>
      <button className="buttonH">Get in touch</button>
    </main>
  );
};

export default Home;
