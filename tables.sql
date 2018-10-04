CREATE TABLE IF NOT EXISTS pokemon (
<<<<<<< HEAD
	id SERIAL PRIMARY KEY,
	name TEXT,
	img TEXT,
	weight TEXT,
	height TEXT
);


CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT
);


CREATE TABLE IF NOT EXISTS users_pokemon (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	pokemon_id INTEGER
=======
  id SERIAL PRIMARY KEY,
  name TEXT,
	img TEXT,
	weight VARCHAR(8),
	height VARCHAR(8)
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
	name TEXT,
	user_id TEXT,
  pokemon_id INTEGER
>>>>>>> 73e63ac926468de86f921645a1ab8600e17cc1b4
);
