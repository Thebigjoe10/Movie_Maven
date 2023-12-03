import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice"
export default configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
