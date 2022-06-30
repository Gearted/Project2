import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

function Container21() {
  const [movie, setMovie] = useState([]);

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
      <button type="button">Films</button>
      <button type="button">Série</button>
      <div className="content">
        {movie.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Container21;
