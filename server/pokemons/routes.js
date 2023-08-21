const express = require("express");
const {
  getPokemons,
  getPokemonById,
  getPokemonInfoById,
} = require("./controllers");
const router = express.Router();

router.get("/", getPokemons);
router.get("/:id", getPokemonById);
router.get("/:id/:info", getPokemonInfoById);

module.exports = router;
