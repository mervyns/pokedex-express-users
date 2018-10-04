module.exports = pool => {
  const getRoot = (request, response) => {
    // query database for all pokemon

    // respond with HTML page displaying all pokemon
    //
    const queryString = "SELECT * from pokemon;";
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
      } else {
        // console.log('Query result:', result);

        // redirect to home page
        response.render("pokemon/home", { pokemon: result.rows });
      }
    });
  };

  const getNew = (request, response) => {
    response.render("pokemon/new");
  };

  const getPokemon = (request, response) => {
    let id = request.params["id"];
    const queryString = "SELECT * FROM pokemon WHERE id = " + id + ";";
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
      } else {
        console.log("Query result:", result);

        // redirect to home page
        response.render("pokemon/pokemon", { pokemon: result.rows[0] });
      }
    });
  };

  const postPokemon = (request, response) => {
    let params = request.body;

    const queryString =
      "INSERT INTO pokemon(name, img, height, weight) VALUES($1, $2, $3, $4);";
    const values = [params.name, params.img, params.height, params.weight];

    pool.query(queryString, values, (err, result) => {
      if (err) {
        console.log("query error:", err.stack);
      } else {
        console.log("query result:", result);

        // redirect to home page
        response.redirect("/");
      }
    });
  };

  const editPokemonForm = (request, response) => {
    let id = request.params["id"];
    const queryString = "SELECT * FROM pokemon WHERE id = " + id + ";";
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
      } else {
        console.log("Query result:", result);

        // redirect to home page
        response.render("pokemon/edit", { pokemon: result.rows[0] });
      }
    });
  };

  const updatePokemon = (request, response) => {
    let id = request.params["id"];
    let pokemon = request.body;
    const queryString =
      'UPDATE "pokemon" SET "num"=($1), "name"=($2), "img"=($3), "height"=($4), "weight"=($5) WHERE "id"=($6)';
    const values = [
      pokemon.num,
      pokemon.name,
      pokemon.img,
      pokemon.height,
      pokemon.weight,
      id
    ];
    console.log(queryString);
    pool.query(queryString, values, (err, result) => {
      if (err) {
        console.error("Query error:", err.stack);
      } else {
        console.log("Query result:", result);

        // redirect to home page
        response.redirect("/");
      }
    });
  };

  const deletePokemonForm = (request, response) => {
    response.send("COMPLETE ME");
  };

  const deletePokemon = (request, response) => {
    response.send("COMPLETE ME");
  };

  return {
    getRoot,
    getNew,
    getPokemon,
    postPokemon,
    editPokemonForm,
    updatePokemon,
    deletePokemonForm,
    deletePokemon
  };
};
