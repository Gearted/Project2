import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Container21.css"

function Container21() {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=FR_fr"
      )
      .then((res) => {
        setSerie(res.data.results);
      });
  });

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3"
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  });

  return (
    <div className="article21">
      <div group-btn>
        <button className="btn2" type="button" onClick={() => setMovie("movie")}>
          Films
        </button>
        <button className="btn2" type="button" onClick={() => setSerie("serie")}>
          Série
        </button>
      </div>

      <div className="content">
        
        {movie.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        {serie.map((serie) => (
          <Card key={serie.id} movie={serie} />
        ))}
      </div>
    </div>
  );
}


export default Container21;
