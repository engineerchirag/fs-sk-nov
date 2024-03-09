import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWatchList } from "../reducers/watchlist.reducer";

const MovieCard = ({ movie }) => {
    const watchlist = useSelector((state) => state.watchList.originalFavourites);
    const dispatch = useDispatch();

    const isMovieAdded = watchlist.find(watchlistMovie => watchlistMovie.id == movie.id);

    const addToWatchlist = (e) => {
        dispatch(addToWatchList(movie));
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