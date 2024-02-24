import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9f48a5b363c49e0c31bf3d09bb319827")
        .then(res => res.json())
        .then(data => setMovies(data.results || []));
  }, []);

  return (
    <div className="movie-list">
        {!movies.length && <h1>Loading...</h1> }
        {
            movies?.map(movie => (
                <MovieCard movie={movie}/>
            ))
        }
    </div>
  );
};

export default MovieList;
