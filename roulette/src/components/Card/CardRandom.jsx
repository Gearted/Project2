import React from "react";

export default function CardRandom({ movie, setIsOpen }) {
  return (
    <div className="cardran">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt="poster"
      />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <button onClick={() => setIsOpen(false)}>x</button>
    </div>
  );
}
