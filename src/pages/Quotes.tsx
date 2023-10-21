import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quotes = () => {
  const navigate = useNavigate();

  const quotes = [
    "The ability to conquer one's self is no doubt the most precious of all things that sport bestows. --Mary Lou",
    "I always felt that my greatest assest was not my physical ability, it was my mental ability. --Bruce Jenner",
    "Life begins at the end of your comfort zone. --Neale Donald Wash",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const changeQuote = () => {
    setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
  };

  return (
    <div>
      <h1>Quotes:</h1>
      <h3>{quotes[currentQuoteIndex]}</h3>
      <button onClick={changeQuote}>Next</button>
      <button style={{ marginLeft: "15px" }} onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default Quotes;
