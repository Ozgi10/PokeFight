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
