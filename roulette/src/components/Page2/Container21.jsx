import Card from "../Card/Card";
import "./Container21.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Container21() {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=fr-FR"
      )
      .then((res) => {
        setSerie(res.data.results);
      });
  });

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=fr-FR"
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  });

  return (
    <div className="article21">
      <button className="btn2">Films</button>
      <button className="btn2">Série</button>
      <div className="content">
        {movie.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        {serie.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Container21;
