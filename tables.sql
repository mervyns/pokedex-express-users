CREATE TABLE IF NOT EXISTS pokemon (
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
);
