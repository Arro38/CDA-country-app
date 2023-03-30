import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Card from "../components/Card";
import axios from "axios";

const HomePage = () => {
  let [countries, setCountries] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  let [rangeInput, setRangeInput] = useState(12);

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
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Tappez le nom du pays"
        />
        <input
          type="range"
          id="rangeInput"
          defaultValue="12"
          onChange={(e) => setRangeInput(e.target.value)}
          min="0"
          max="50"
        />
      </header>
      <section className="flags-container">
        {countries
          .slice(0, rangeInput)
          .filter((country) =>
            country.translations.fra.common
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .map((country, index) => (
            <Card key={index} c={country} />
          ))}
      </section>
    </div>
  );
};

export default HomePage;
