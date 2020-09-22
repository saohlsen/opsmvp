DROP DATABASE IF EXISTS movie_search;
CREATE DATABASE movie_search;
USE movie_search;
CREATE TABLE saved_movies (
  id INT,
  image VARCHAR(8000),
  title VARCHAR(250),
  PRIMARY KEY (id)
);