import { useState, useEffect } from "react";

export default function useFetchDetail(id) {
  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`https://pokef.onrender.com/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Loading failed");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonDetail(data);
      })
      .catch((error) => console.error(`Fetching Pokemons failed`, error));
  }, [id]);

  return pokemonDetail;
}
