import React from "react";
import { movieItem } from "../utils/moviesData";

export interface movieContext {
  loading: boolean;
  movies: movieItem[] | [];
  error: boolean;
  confirmItem: (id: string) => void;
  rejectItem: (id: string) => void;
}

const MovieContext = React.createContext<movieContext>({
  loading: false,
  movies: [],
  error: false,
  confirmItem: () => {},
  rejectItem: () => {},
});

export default MovieContext;
