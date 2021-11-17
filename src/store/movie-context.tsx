import React from "react";
import { MovieItem } from "../utils/moviesData";

export interface movieContext {
  loading: boolean;
  movies: MovieItem[] | [];
  error: boolean;
  confirmItem: (id: string) => void;
  rejectItem: (id: string) => void;
}

const MovieContext = React.createContext<movieContext>({
  loading: true,
  movies: [],
  error: false,
  confirmItem: () => {},
  rejectItem: () => {},
});

export default MovieContext;
