import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    originalFavourites: [],
    filteredFavourites: [],
    genres: [],
    selectedGenreId: ''
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    onWatchListChange: (state, action) => {
        const genresData = state.originalFavourites.map((data) => data.genre_ids[0]);
        state.genres = Array.from(new Set(genresData));
        state.filteredFavourites = state.originalFavourites;
    },
    addToWatchList: (state, action) => {
        state.originalFavourites.push(action.payload);
        watchListSlice.caseReducers.onWatchListChange(state, action);
    },
    removeFromWatchList: (state, action) => {
        const movieIdx = state.originalFavourites.findIndex(fav => fav.id == action.payload);
        state.originalFavourites.splice(movieIdx, 1);
        watchListSlice.caseReducers.onWatchListChange(state, action);
    },
    searchWatchList: (state, action) => {
        state.filteredFavourites = state.originalFavourites.filter((movie) =>
            movie.title.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
    filterWatchList: (state, action) => {
        state.filteredFavourites = state.originalFavourites.filter(
            (movie) => !state.selectedGenreId || movie.genre_ids[0] == state.selectedGenreId
        );
    },
    sortWatchList: (state, action) => {
        if (!action.payload) {
            state.filteredFavourites = state.originalFavourites;
        } else {
            state.filteredFavourites = [...state.originalFavourites].sort((a, b) => {
            return action.payload === "ASC"
                ? a.popularity - b.popularity
                : b.popularity - a.popularity;
            });
        }
    },
    setSelectedGenreId: (state, action) => {
        state.selectedGenreId = action.payload;
    }
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  searchWatchList,
  filterWatchList,
  sortWatchList,
  setSelectedGenreId,
} = watchListSlice.actions;

export default watchListSlice.reducer;
