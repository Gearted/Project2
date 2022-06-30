import React from "react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

function Container1() {
  const data = [
    {
      option: "",
      style: { backgroundColor: "black" },
    },
    { option: "", style: { backgroundColor: "red" } },
    { option: "", style: { backgroundColor: "black" } },
    { option: "", style: { backgroundColor: "red" } },
    { option: "", style: { backgroundColor: "black" } },
    { option: "", style: { backgroundColor: "red" } },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

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

      <div className="container1">
        <button type="button" className="btn1">
          Films
        </button>
        <button type="button" className="btn1">
          Série
        </button>

        <select className="select" name="Genre" id="Genre">
          <option value="">Drame</option>
          <option value="">Comédie</option>
          <option value="">Action</option>
          <option value="">Thriller</option>
          <option value="">Fantastique</option>
          <option value="">Horreur</option>
        </select>
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
        <button className="btn1" onClick={handleSpinClick}>
          GO
        </button>
      </div>
    </article>
  );
}

export default Container1;
