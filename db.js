// Initialise postgres client
const config = {
  user: "mervyn",
  host: "127.0.0.1",
  database: "pokemon_db",
  port: 5432
};

if (config.user === "ck") {
  throw new Error("====== UPDATE YOUR DATABASE CONFIGURATION =======");
}

const pool = new pg.Pool(config);

pool.on("error", function(err) {
  console.log("Idle client error", err.message, err.stack);
});
