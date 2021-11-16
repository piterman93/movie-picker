import { moviesData } from "../utils/moviesData";

export const callMoviesAPI = () => {
  // here should be fetch POST request to "URL/recommendations" with try catch block which returns movies data or handle error
  return moviesData;
};

export const acceptMovieAPI = async (id: string) => {
  return fetch(`URL/recommendations/${id}/accept`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const rejectMovieAPI = async (id: string) => {
  return fetch(`URL/recommendations/${id}/reject`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
