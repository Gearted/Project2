import Affiche from "../Affiche";
import "./Container2.css"

import axios from "axios";
import { useEffect, useState } from "react";

function Container2() {
  const [afficheMovie, setAfficheMovie] = useState([]);
  const [afficheSerie, setAfficheSerie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=fr-FR"
      )
      .then((res) => {
        setAfficheSerie(res.data.results);
      });
  });

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3&language=fr-FR"
      )
      .then((res) => {
        setAfficheMovie(res.data.results);
      });
  });

  return (
    <div className="article2">
      <div className="content1">
        {afficheMovie.map((afficheMovie) => (
          <Affiche key={afficheMovie.id} affiche={afficheMovie} />
        ))}
        {afficheSerie.map((afficheSerie) => (
          <Affiche key={afficheSerie.id} affiche={afficheSerie} />
        ))}
      </div>
    </div>
  );
}

export default Container2;
