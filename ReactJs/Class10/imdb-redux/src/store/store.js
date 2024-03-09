import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../reducers/movieList.reducer'
import watchlistReducer from '../reducers/watchlist.reducer'

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    watchList: watchlistReducer
  },
})