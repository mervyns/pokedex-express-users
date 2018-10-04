module.exports = (app, pool) => {
  const pokemon = require("./controllers/pokemon")(pool);

  app.get("/", pokemon.getRoot);
  app.get("/pokemon/:id/edit", pokemon.editPokemonForm);
  app.get("/pokemon/new", pokemon.getNew);
  app.get("/pokemon/:id", pokemon.getPokemon);
  app.get("/pokemon/:id/delete", pokemon.deletePokemonForm);

  app.post("/pokemon", pokemon.postPokemon);

  app.put("/pokemon/:id", pokemon.updatePokemon);

  app.delete("/pokemon/:id", pokemon.deletePokemon);

  // TODO: New routes for creating users
  const user = require("./controllers/user")(pool);

  app.get("/users/new", user.userNew);
  app.get("/users/:id/catch", user.userCatch);
  app.get("/users/:id/caught", user.pokeName);
  app.post("/users", user.userCreate);
  app.post("/users/inter", user.pokeCaught);
};
