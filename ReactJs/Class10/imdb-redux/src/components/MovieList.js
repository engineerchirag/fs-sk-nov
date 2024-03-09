import Heading from "./Heading";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../reducers/movieList.reducer";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  const fetchMovies = (pageNo) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
        .then(res => res.json())
        .then(data => dispatch(setMovies(data.results || [])));
  }

  const popularMovieCount = useMemo(() => movies.filter((movie) => {
    console.log("Recompute");
    return movie.popularity > 1000;
  }).length, [movies]);

  useEffect(() => {
    fetchMovies(1);
  }, []);

  return (
    <>
      <Heading />
      <p>Popular movies (>1000) : {popularMovieCount}</p>
      <div className="movie-list">
          {!movies.length && <h1>Loading...</h1> }
          {
              movies?.map(movie => (
                  <MovieCard movie={movie} />
              ))
          }
      </div>
      <Pagination onPageChange={fetchMovies} />
    </>
  );
};

export default MovieList;
