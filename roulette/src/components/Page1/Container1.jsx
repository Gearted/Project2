import React from "react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./Container1.css";
import axios from "axios";
import CardMovie from "../Card/CardMovie";

function Container1() {
  const data = [
    {
      option: "",
      style: { backgroundColor: "#141414" },
    },
    { option: "", style: { backgroundColor: "#E10915" } },
    { option: "", style: { backgroundColor: "#141414" } },
    { option: "", style: { backgroundColor: "#E10915" } },
    { option: "", style: { backgroundColor: "#141414" } },
    { option: "", style: { backgroundColor: "#E10915" } },
    { option: "", style: { backgroundColor: "#141414" } },
    { option: "", style: { backgroundColor: "#E10915" } },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [randomMovie, setRandomMovie] = useState("");

  const handleChange = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=fr-FR"
      )
      .then((res) => {
        setRandomMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      });
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <article className="article1">
      <div>
        <h1>Faites vos jeux ! rien ne vas plus !</h1>
        <h2>La chance vous dira ce que vous regarderez ce soir</h2>
      </div>

      <div className="roulette">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button
          className="btn1"
          onClick={() => {
            handleSpinClick();
            setTimeout(() => {
              handleChange();
            }, 12000);
          }}
        >
          GO
        </button>
      </div>
      <div className="cardrandom">
        <CardMovie key={randomMovie.id} movie={randomMovie} />
      </div>
    </article>
  );
}

export default Container1;
