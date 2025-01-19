import React, { useState } from "react";
import "./MovieList.css";

const MovieList = () => {
  const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      releaseYear: 2010,
      image: "/inception_100.jpg",
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      releaseYear: 2008,
      image: "/thedarkknight_100.jpg", // Ensure this matches the file name
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      releaseYear: 2014,
      image: "/interstellar_100.jpg",
    },
    {
      title: "Gladiator",
      genre: "Drama",
      releaseYear: 2000,
      image: "/gladiator_100.jpg",
    },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <div className="movies">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => alert(`You clicked on ${movie.title}`)}
          >
            <img
              src={movie.image}
              alt={`${movie.title} poster`}
              className="movie-poster"
            />
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
