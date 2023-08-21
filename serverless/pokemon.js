const jsonData = require("../pokedex.json");

exports.handler = async function (event, context) {
  const { id } = event.pathParameters;

  const pokemon = jsonData.find((p) => p.id === id);
  if (!pokemon) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Pokémon not found" }),
    };
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(pokemon),
  };
  return response;
};
