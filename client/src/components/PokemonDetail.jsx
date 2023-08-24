import useFetchAll from "../hooks/useFetchAll";
import useFetchInfo from "../hooks/useFetchInfo";
import { useParams } from "react-router-dom";

export default function PokemonDetail() {
  const { id } = useParams();
  const pokemonDetail = useFetchAll(id);
  const pokemonBase = useFetchInfo(id);

  return (
    <div>
      <h2>Pokemon Detailed View</h2>
      <p>Name: {pokemonDetail[id]?.name?.english}</p>
      <p>(Japanese): {pokemonDetail[id]?.name?.japanese}</p>
      <p>(Chinese): {pokemonDetail[id]?.name?.chinese}</p>
      <p>(French): {pokemonDetail[id]?.name?.french}</p>
      <p>Type: {pokemonDetail[id]?.type?.join(", ")}</p>
      <p>Base:</p>
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
