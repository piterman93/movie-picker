import { useContext } from "react";

import MovieItem from "./components/MovieItem";
import MovieContext from "./store/movie-context";

import "./styles/App.scss";

function App() {
  const context = useContext(MovieContext);

  const moviesToDisplay = context.movies.map((movie) => (
    <MovieItem
      key={movie.id}
      id={movie.id}
      imageURL={movie.imageURL}
      title={movie.title}
      summary={movie.summary}
      rating={movie.rating}
    />
  ));

  const content =
    context.movies.length > 0 ? (
      moviesToDisplay
    ) : (
      <div className="notification">No more movies to choose!</div>
    );
  return (
    <div className="App">
      <header>
        <h1>Movie Tinder</h1>
      </header>
      <section>{content}</section>
    </div>
  );
}

export default App;
