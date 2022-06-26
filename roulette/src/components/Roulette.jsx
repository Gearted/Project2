import React from "react";

export default function Roulette() {
  const container = document.querySelector(".container");
  const btn = document.getElementById("spin");
  let number = Math.ceil(Math.random() * 3000);

  // eslint-disable-next-line func-names
  btn.onclick = function () {
    container.style.transform = `rotate(${number}deg)`;
    number += Math.ceil(Math.random() * 3000);
  };
  return <div>Roulette</div>;
}
