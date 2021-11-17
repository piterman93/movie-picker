import React, { useContext } from "react";
import MovieContext from "../store/movie-context";

import "../styles/MovieItem.scss";

export interface MovieItemProps {
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
  id: string;
  activeIndex: number;
  setActiveIndex: any;
}

const MovieItem: React.FC<MovieItemProps> = ({
  imageURL,
  title,
  summary,
  rating,
  id,
  activeIndex,
  setActiveIndex,
}) => {
  const context = useContext(MovieContext);

  const confirmMovieHandler = (id: string) => {
    setActiveIndex((activeIndex += 1));
    context.confirmItem(id);
  };

  const rejectMovieHandler = (id: string) => {
    setActiveIndex((activeIndex += 1));
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
            data-testid="accept-button"
            className="button button__confirm"
            onClick={() => confirmMovieHandler(id)}
          >
            Accept
          </button>
          <button
            data-testid="reject-button"
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
