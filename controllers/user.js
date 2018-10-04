const sha256 = require("js-sha256");

module.exports = pool => {
  const userNew = (request, response) => {
    response.render("users/new");
  };

  const userCreate = (request, response) => {
    const queryString = "INSERT INTO users (name, password) VALUES ($1, $2)";
    const passwordHash = sha256(request.body.password);
    const values = [request.body.name, passwordHash];

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

  const userLogin = (req, res) => {
    res.render("users/login");
  };

  const userLoginPost = (req, res) => {
    let queryString = "SELECT * FROM users WHERE name='" + req.body.name + "'";
    pool.query(queryString, (err, queryResult) => {
      if (err) {
        console.error("Query error:", err.stack);
        response.send("dang it.");
      } else {
        const user = queryResult.rows[0];
        var hashedPass = sha256(req.body.password);
        if (hashedPass === user.password) {
          res.cookie("loggedIn", "true");
          res.cookie('username', user.name)
          res.redirect("/");
        } else {
          res.send("Wrong Password");
        }
      }
    });
  };

  const userLogout = (req, res) => {
      res.clearCookie('loggedIn')
      res.clearCookie('username')
      res.redirect('/')
  }

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
    pokeName,
    userLogin,
    userLoginPost,
    userLogout
  };
};
