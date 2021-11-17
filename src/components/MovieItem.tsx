import React, { useContext, useState } from "react";
import MovieContext from "../store/movie-context";
import { useDrag } from "@use-gesture/react";

import "../styles/MovieItem.scss";

import { containerVariants } from "../utils/animationData";

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
    setActiveIndex(activeIndex++);
    context.confirmItem(id);
  };

  const rejectMovieHandler = (id: string) => {
    setActiveIndex(activeIndex++);
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
