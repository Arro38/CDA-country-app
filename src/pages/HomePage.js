import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import axios from "axios";

const HomePage = () => {
  let [countries, setCountries] = useState([]);
  const inputRef = useRef();

  const fetchCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  };

  useEffect(fetchCountries, []);

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
        <input
          type="range"
          id="rangeInput"
          defaultValue="12"
          min="0"
          max="50"
          ref={inputRef}
        />
      </header>
      <section className="flags-container">
        {countries.map((country, index) => (
          <Card key={index} c={country} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
