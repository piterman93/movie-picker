import React, { useContext } from "react";
import MovieContext from "../store/movie-context";

import "../styles/MovieItem.scss";

import { movieItem as movieItemProps } from "../utils/moviesData";

const MovieItem: React.FC<movieItemProps> = ({
  imageURL,
  title,
  summary,
  rating,
  id,
}) => {
  const context = useContext(MovieContext);

  const confirmMovieHandler = (id: string) => {
    context.confirmItem(id);
  };

  const rejectMovieHandler = (id: string) => {
    context.rejectItem(id);
  };

  return (
    <div className="section__movieItem">
      <div className="movieItem__image">
        <img src={imageURL} alt={title} />
      </div>
      <div className="movieItem__description">
        <h2>
          {title} ({rating}/10)
        </h2>
        <p>{summary}</p>
        <div className="actions">
          <button
            className="button button__confirm"
            onClick={() => confirmMovieHandler(id)}
          >
            Accept
          </button>
          <button
            className="button button__reject"
            onClick={() => rejectMovieHandler(id)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
