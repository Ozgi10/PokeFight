import useFetchAll from "../hooks/useFetchAll";
import usePokemonDetail from "../hooks/useFetchDetail";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { id } = useParams();
  const pokemonDetail = useFetchAll(id - 1);
  const pokemonBase = usePokemonDetail(id);

  return (
    <div>
      <h2>Pokemon Detailed View</h2>
      <p>Name: {pokemonDetail[id - 1]?.name?.english}</p>{" "}
      <p>(Japanese): {pokemonDetail[id - 1]?.name?.japanese}</p>{" "}
      <p>(Chinese): {pokemonDetail[id - 1]?.name?.chinese}</p>{" "}
      <p>(French): {pokemonDetail[id - 1]?.name?.french}</p>{" "}
      <p>Type: {pokemonDetail[id - 1]?.type?.join(", ")}</p> <p>Base:</p>
      <ul>
        {Object.entries(pokemonBase.base || {}).map(([stat, value]) => (
          <li key={stat}>
            {stat}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
