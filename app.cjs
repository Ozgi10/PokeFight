const express = require("express");
const routes = require("./server/pokemons/routes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use("/pokemon", routes);

app.get("/", (req, res) => {
  res.send("Hello Pokefight!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
