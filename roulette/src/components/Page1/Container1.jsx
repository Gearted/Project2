import { Wheel } from "react-custom-roulette";
import { useState } from "react";

const data = [
  { option: "Film", style: { backgroundColor: "red", textColor: "White" } },
  { option: "Série", style: { backgroundColor: "black", textColor: "White" } },
  { option: "Film", style: { backgroundColor: "red", textColor: "White" } },
  { option: "Série", style: { backgroundColor: "black", textColor: "White" } },
  { option: "Film", style: { backgroundColor: "red", textColor: "White" } },
  { option: "Série", style: { backgroundColor: "black", textColor: "White" } },
];

export default function Container1() {
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
        <p className="text1">texte de présentation de la roulette</p>
      </div>

      <div className="container1">
        <button type="button" className="btn1">
          Films
        </button>
        <button type="button" className="btn2">
          Série
        </button>
        <select name="" id="">
          selection du genre
        </select>
        <select name="" id="">
          selection de la durée
        </select>

        <div className="wheel">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          <button type="button" onClick={handleSpinClick}>
            Go
          </button>
        </div>
      </div>

      <div className="roulette">carte affiché par la roulette</div>
    </article>
  );
}
