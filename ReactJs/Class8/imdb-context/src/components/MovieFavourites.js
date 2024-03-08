import { useContext, useEffect, useState } from "react";
import { FavouriteMovieContext } from "../context/FavouriteMovie";

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
  const favouriteContextData = useContext(FavouriteMovieContext);
  const { watchlist } = favouriteContextData;

  const [favourites, setFavourites] = useState([]);
  const [filteredFavourites, setFilteredFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenreId, setSelectedGenreId] = useState("");

  useEffect(() => {
    const genresData = watchlist.map((data) => data.genre_ids[0]);
    setGenres(Array.from(new Set(genresData)));
    setFavourites(watchlist);
    setFilteredFavourites(watchlist);
  }, [watchlist]);

  const handleGenreSelection = (e) => {
    const id = e.target.dataset.id;
    setSelectedGenreId(id);
  };

  useEffect(() => {
    setFilteredFavourites(() => {
      return favourites.filter(
        (movie) => !selectedGenreId || movie.genre_ids[0] == selectedGenreId
      );
    });
  }, [selectedGenreId, favourites]);

  const handleMovieSearch = (e) => {
    const text = e.target.value;
    setFilteredFavourites(() => {
      return favourites.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
    });
  };

  const handlePopularitySorting = (e) => {
    const sortingType = e.target.dataset.type;
    setFilteredFavourites(() => {
      if (!sortingType) {
        return favourites;
      }
      return [...favourites].sort((a, b) => {
        return sortingType === "ASC"
          ? a.popularity - b.popularity
          : b.popularity - a.popularity;
      });
    });
  };

  const handleMovieDeletion = (movieId) => (e) => {
    setFavourites((prevFavouries) => {
        const movieIdx = prevFavouries.findIndex(fav => fav.id == movieId);
        const finalFav = [...prevFavouries];
        finalFav.splice(movieIdx, 1);
        localStorage.setItem("favourites", JSON.stringify(finalFav));
        return finalFav;
    })     
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
