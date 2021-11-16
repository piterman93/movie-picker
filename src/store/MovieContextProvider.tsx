import React, { useState, useEffect } from "react";

import MovieContext, { movieContext } from "./movie-context";

import {
  callMoviesAPI,
  acceptMovieAPI,
  rejectMovieAPI,
} from "../services/moviesService";
import { movieItem } from "../utils/moviesData";

export const MovieContextProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<movieItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    const moviesArray = await callMoviesAPI();
    setMovies(moviesArray);
    setLoading(false);
  };

  const confirmItem = (id: string) => {
    setLoading(true);
    acceptMovieAPI(id)
      .then((data) => {
        // if our response is ok
      })
      .catch((error) => {
        setError(error);
        //error handling - in our case API call always returns error as URL does not exist
      });
    setLoading(false);

    // removing item from movies array for our need
    const newMovies = [...movies].filter((movie) => movie.id !== id);
    setMovies(newMovies);
  };
  const rejectItem = (id: string) => {
    setLoading(true);
    rejectMovieAPI(id)
      .then((data) => {
        // if our response is ok
      })
      .catch((error) => {
        setError(error);
        //error handling - in our case API call always returns error as URL does not exist
      });
    setLoading(false);

    // removing item from movies array for our need
    const newMovies = [...movies].filter((movie) => movie.id !== id);
    setMovies(newMovies);
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
