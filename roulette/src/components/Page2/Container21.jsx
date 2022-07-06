import CardMovie from "../Card/CardMovie";
import CardSerie from "../Card/CardSerie";
import "./Container21.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Container21() {
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="article21">
      <button className="btn2">Films</button>
      <button className="btn2">Série</button>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div className="content">
          {movie
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          {serie
            .filter((movie) =>
              movie.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <CardSerie key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Container21;
