import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavouriteMovieContext } from "../context/FavouriteMovie";

const MovieCard = ({ movie }) => {

    const favouriteContextData = useContext(FavouriteMovieContext);
    const { watchlist, updateWatchlist } = favouriteContextData;

    const isMovieAdded = watchlist.find(watchlistMovie => watchlistMovie.id == movie.id);

    const addToWatchlist = (e) => {
        // const movieId = e.target.dataset.id;
        updateWatchlist((prevWatchlist) => {
            // TODO: Fix Add & Remove logic
            const favourites = [...prevWatchlist , movie];
            return favourites;
        });
    }
    return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Link to={`/movie-detail/${movie.id}`}><h5>{movie.title}</h5></Link>
                <button data-id={movie.id} onClick={addToWatchlist}>
                    { isMovieAdded ? "Remove from watchlist" : "Add to watchlist"}
                </button>
            </div>
        </div>
    )
}

export default MovieCard;