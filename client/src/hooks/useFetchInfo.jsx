import { useState, useEffect } from "react";

export default function useFetchInfo(id) {
  const [pokemonDetails, setPokemonInfo] = useState({});

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
        setPokemonInfo(data);
      })
      .catch((error) => console.error(`Fetching Pokemons failed`, error));
  }, [id]);

  return pokemonDetails;
}
