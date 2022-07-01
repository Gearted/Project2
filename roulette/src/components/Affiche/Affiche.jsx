import React from "react";

export default function Affiche({ affiche }) {
  return (
    <div className="affiche">
      <img
        className="picture"
        src={
          affiche.poster_path
            ? "https://image.tmdb.org/t/p/w500" + affiche.poster_path
            : "./img/poster.jpg"
        }
        alt="poster"
      />
    </div>
  );
}
