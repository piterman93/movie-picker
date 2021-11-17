import React, { useState, useEffect } from "react";

import MovieContext, { movieContext } from "./movie-context";

import {
  callMoviesAPI,
  acceptMovieAPI,
  rejectMovieAPI,
} from "../services/moviesService";
import { MovieItem } from "../utils/moviesData";

export const MovieContextProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    const moviesArray = await callMoviesAPI();
    setMovies(moviesArray);
    setLoading(false);
  };

  const confirmItem = (id: string) => {
    setLoading(true);
    const confirmedItem = [...movies].find((item) => item.id === id);
    acceptMovieAPI(id, confirmedItem!)
      .then((data) => {
        // if our response is ok
      })
      .catch((error) => {
        setError(error);
        //error handling - in our case API call always returns error as URL does not exist
      })
      .finally(() => setLoading(false));
  };

  const rejectItem = (id: string) => {
    setLoading(true);
    const rejectedItem = [...movies].find((item) => item.id === id);
    rejectMovieAPI(id, rejectedItem!)
      .then((data) => {
        // if our response is ok
      })
      .catch((error) => {
        setError(error);
        //error handling - in our case API call always returns error as URL does not exist
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const context: movieContext = {
    loading: loading,
    movies: movies,
    error: error,
    confirmItem: confirmItem,
    rejectItem: rejectItem,
  };

  return (
    <MovieContext.Provider value={context}>{children}</MovieContext.Provider>
  );
};
