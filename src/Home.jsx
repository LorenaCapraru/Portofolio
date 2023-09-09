import Logo from "./1.png";
import React, { useEffect, useState } from "react";
const Home = () => {
  return (
    <main className="home">
      <p className="roleH">FULL STACK DEVELOPER</p>
      <img className="logoH" src={Logo} alt="React Logo" />
      <p className="placeH">LONDON BASED</p>
    </main>
  );
};

export default Home;
