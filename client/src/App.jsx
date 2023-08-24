import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail.jsx";
import PokemonInfo from "./components/PokemonInfo.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element="Welcome to PokeFight!" />
          <Route path="/pokemon/" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/pokemon/:id/:info" element={<PokemonInfo />} />
        </Routes>
      </div>
    </Router>
  );
}
