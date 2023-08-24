import useFetchAll from "../hooks/useFetchAll";
import { Link } from "react-router-dom";
import "../App.css";

export default function PokemonList() {
  const pokemonList = useFetchAll();

  return (
    <div>
      <h2>Pokemons List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
