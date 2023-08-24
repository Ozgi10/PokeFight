/*import useFetch from "../hooks/useFetchAll";
import { useParams } from "react-router-dom";

export default function PokemonInfo() {
  const { id, info } = useParams();
  const pokemonDetail = useFetch(id);

  if (!pokemonDetail || !pokemonDetail[info]) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{info} Info</h1>
      <p>{pokemonDetail[info]}</p>
    </div>
  );
}
*/

import useFetchInfo from "../hooks/useFetchInfo";
import { useParams } from "react-router-dom";

export default function PokemonInfo() {
  const { id, info } = useParams();
  const displayInfo = useFetchInfo(id - 1, info); // Subtract 1 from ID

  return (
    <div>
      <h2>Super Detailed View</h2>
      <p>{displayInfo}</p>
    </div>
  );
}
