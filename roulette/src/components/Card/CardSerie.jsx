import "./Card.css";
import React from "react";

export default function CardSerie({ movie }) {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt="poster"
      />
      <h2>{movie.name}</h2>
      <p>Synopsys : {movie.overview}</p>
      <p>Date de sortie : {movie.first_air_date}</p>
      <p>Vote des internautes : {movie.vote_average}</p>
    </div>
  );
}
