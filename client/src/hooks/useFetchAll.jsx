import { useState, useEffect, useMemo } from "react";

export default function useFetchAll() {
  const [PokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokef.onrender.com/pokemon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Loading failed");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonList(data);
      })
      .catch((error) => console.error("Failed to fetch all Pokemon: ", error));
  }, []);

  return useMemo(() => PokemonList, [PokemonList]);
}
