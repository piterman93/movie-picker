import { MovieItem, moviesData } from "../utils/moviesData";

export const callMoviesAPI = () => {
  // here should be fetch GET request to "URL/recommendations" with try catch block which returns movies data or handle error
  return moviesData;
};

export const acceptMovieAPI = async (id: string, data: MovieItem) => {
  return fetch(`URL/recommendations/${id}/accept`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
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

export const rejectMovieAPI = async (id: string, data: MovieItem) => {
  return fetch(`URL/recommendations/${id}/reject`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
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
