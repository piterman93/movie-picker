import { useContext, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import MovieItem from "./components/MovieItem";
import MovieContext from "./store/movie-context";

import "./styles/App.scss";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const context = useContext(MovieContext);

  const content =
    context.movies.length === activeIndex ? (
      <div className="notification">No more movies to rate!</div>
    ) : (
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={activeIndex}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <MovieItem
            key={context.movies[activeIndex].id}
            id={context.movies[activeIndex].id}
            imageURL={context.movies[activeIndex].imageURL}
            title={context.movies[activeIndex].title}
            summary={context.movies[activeIndex].summary}
            rating={context.movies[activeIndex].rating}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </CSSTransition>
      </SwitchTransition>
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
