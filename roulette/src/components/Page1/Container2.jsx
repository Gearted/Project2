import Affiche from "../Affiche";

import axios from "axios";
import { useEffect, useState } from "react";

function Container2() {
  const [affiche, setAffiche] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3610ee86baad1de5acf5c561982cf1d3"
      )
      .then((res) => {
        setAffiche(res.data.results);
      });
  });

  return (
    <div className="article2">
      <div className="content1">
        {affiche.map((affiche) => (
          <Affiche key={affiche.id} affiche={affiche} />
        ))}
      </div>
    </div>
  );
}

export default Container2;
