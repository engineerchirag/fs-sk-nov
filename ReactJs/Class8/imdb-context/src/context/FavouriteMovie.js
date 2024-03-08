import { createContext, useState } from "react";


export const FavouriteMovieContext = createContext();

const FavouriteMovieProvider = ({ children }) => {
    const [watchlist, updateWatchlist] = useState([]); 
    return (
        <FavouriteMovieContext.Provider value={{ watchlist, updateWatchlist }}>
            {children}
        </FavouriteMovieContext.Provider>
    )
}

export default FavouriteMovieProvider;