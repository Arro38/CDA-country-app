import React from "react";

const Card = ({ c }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={c.flags.svg} alt={"drapeau" + c.translations.fra.common} />
      </div>
      <div className="info-container">
        <span>{c.translations.fra.common}</span>
        <span>{c.capital}</span>
        <span>Population : {c.population}</span>
      </div>
    </div>
  );
};

export default Card;
