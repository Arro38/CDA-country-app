import React from "react";
import Logo from "../components/Logo";

const HomePage = () => {
  // https://restcountries.com/v3.1/all

  return (
    <div className="app">
      <header>
        <Logo />
        <h1>Country App</h1>
        <input
          type="text"
          id="searchInput"
          placeholder="Tappez le nom du pays"
        />
        <input type="range" id="rangeInput" />
      </header>
      <section className="flags-container"></section>
    </div>
  );
};

export default HomePage;
