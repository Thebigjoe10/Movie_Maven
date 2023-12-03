import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    // Define your initial state here
    movieList: [],
  },
  reducers: {
    // Define your actions and reducers here
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { setMovieList } = movieSlice.actions;

export const selectMovieList = (state) => state.movies.movieList;

export default movieSlice.reducer;
