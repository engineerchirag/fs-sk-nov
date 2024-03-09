import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterWatchList, removeFromWatchList, searchWatchList, setSelectedGenreId, sortWatchList } from "../reducers/watchlist.reducer";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const MovieFavourites = () => {
  const { originalFavourites,
    filteredFavourites,
    genres,
    selectedGenreId,
  } = useSelector((state) => state.watchList);

  const dispatch = useDispatch();

  const handleGenreSelection = (e) => {
    const id = e.target.dataset.id;
    dispatch(setSelectedGenreId(id));
  };

  useEffect(() => {
    dispatch(filterWatchList());
  }, [selectedGenreId, originalFavourites]);

  const handleMovieSearch = (e) => {
    const text = e.target.value;
    dispatch(searchWatchList(text));
  };

  const handlePopularitySorting = (e) => {
    const sortingType = e.target.dataset.type;
    dispatch(sortWatchList(sortingType));
  };

  const handleMovieDeletion = (movieId) => (e) => {
    dispatch(removeFromWatchList(movieId));
  }

  return (
    <div>
      <h1>Favourites Movie</h1>
      <div className="favourite-wrapper">
        <div className="left-section">
          <div className="genre-wrapper">
            <div
              className={`genre ${selectedGenreId === "" ? "selected" : ""}`}
              onClick={handleGenreSelection}
              data-id=""
            >
              All Genre
            </div>
            {genres.map((genreId) => (
              <div
                className={`genre ${
                  selectedGenreId == genreId ? "selected" : ""
                }`}
                data-id={genreId}
                onClick={handleGenreSelection}
              >
                {genreids[genreId]}
              </div>
            ))}
          </div>
        </div>
        <div className="right-section">
          <input
            type="text"
            placeholder="Search movie..."
            onChange={handleMovieSearch}
          />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th>
                  <span onClick={handlePopularitySorting} data-type="">
                    Popularity
                  </span>
                  <span onClick={handlePopularitySorting} data-type="ASC">
                    ^
                  </span>
                  <span onClick={handlePopularitySorting} data-type="DES">
                    v
                  </span>
                </th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFavourites.map((favourite) => (
                <tr>
                  <td>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${favourite.poster_path}`}
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>{favourite.title}</td>
                  <td>{genreids[favourite.genre_ids[0]]}</td>
                  <td>{favourite.popularity}</td>
                  <td>{favourite.vote_average}</td>
                  <td>
                    <button onClick={handleMovieDeletion(favourite.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MovieFavourites;
