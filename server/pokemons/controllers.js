const jsonData = require("../../pokedex.json");

exports.getPokemons = (req, res) => {
  try {
    res.json(jsonData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPokemonById = (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = jsonData.find((p) => p.id == id);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: "Pokemon not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPokemonInfoById = (req, res) => {
  const { id, info } = req.params;

  try {
    const pokemon = jsonData.find((p) => p.id == id);
    if (pokemon) {
      if (info === "name" || info === "type" || info === "base") {
        res.json({ [info]: pokemon[info] });
      } else {
        res.status(400).json({ error: "Invalid info parameter" });
      }
    } else {
      res.status(404).json({ error: "Pokemon not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
