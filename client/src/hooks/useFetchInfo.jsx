import { useState, useEffect } from "react";

export default function useFetchInfo(id, info) {
  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    fetch(`https://pokef.onrender.com/pokemon/${id + 1}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Loading failed");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonDetail(data);
      })
      .catch((error) => console.error(`Fetching Pokemon detail failed`, error));
  }, [id]);

  if (info === "name") {
    return (
      <div>
        Names: [english:] {pokemonDetail.name?.english}, [japanese:]{" "}
        {pokemonDetail.name?.japanese}, [chinese:] {pokemonDetail.name?.chinese}
        , [french:] {pokemonDetail.name?.french}
      </div>
    );
  } else if (info === "type") {
    return <div>Type: {pokemonDetail.type?.join(", ")}</div>;
  } else if (info === "base") {
    return Object.entries(pokemonDetail.base || {}).map(([stat, value]) => (
      <li key={stat}>
        {stat}: {value}
      </li>
    ));
  }

  return ""; // Default value if info is not recognized
}
