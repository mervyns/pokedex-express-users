module.exports = pool => {
  const userNew = (request, response) => {
    response.render("users/new");
  };

  const userCreate = (request, response) => {
    const queryString = "INSERT INTO users (name) VALUES ($1)";

    const values = [request.body.name];

    console.log(queryString);

    pool.query(queryString, values, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
        response.send("dang it.");
      } else {
        console.log("Query result:", result);
        response.render("user/catch", result);
        // redirect to home page
      }
    });
    response.redirect("/");
  };

  const userCatch = (request, response) => {
    response.render("users/catch", { id: request.params.id });
  };

  const pokeCaught = (request, response) => {
    console.log(request.body);

    const queryString =
      "INSERT INTO users_pokemon (user_id, pokemon_id) VALUES ($1, $2)";

    let values = [request.body.user_id, request.body.pokemon_id];

    pool.query(queryString, values, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
        response.send("dang it.");
      } else {
        console.log("Query result:", result);
        response.redirect("/users/" + request.body.user_id + "/caught");
      }
    });
  };

  const pokeName = (request, response) => {
    const queryString = `SELECT pokemon.name FROM pokemon INNER JOIN users_pokemon ON (users_pokemon.pokemon_id = pokemon.id) WHERE users_pokemon.user_id = ${
      request.params.id
    }`;

    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
        response.send("dang it.");
      } else {
        console.log("Query result:", result.rows);

        response.render("users/caught", { caught: result.rows });
      }
    });
  };
  return {
    userNew,
    userCreate,
    userCatch,
    pokeCaught,
    pokeName
  };
};
