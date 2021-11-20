import { useContext, useState, useEffect, useCallback } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import MovieItem from "./components/MovieItem";
import MovieContext from "./store/movie-context";

import "./styles/App.scss";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const context = useContext(MovieContext);

  const handleTouchStart = (e: any) => {
    const start = e.changedTouches[0].clientX;
    setTouchStart(start);
  };

  const handleTouchMove = (e: any) => {
    const end = e.changedTouches[0].clientX;
    setTouchEnd(end);
  };

  const handleTouchEnd = useCallback(() => {
    if (
      touchStart - touchEnd < -75 &&
      activeIndex <= context.movies.length - 1
    ) {
      context.rejectItem(context.movies[activeIndex].id);
      setActiveIndex(activeIndex + 1);
      setTouchStart(0);
      setTouchEnd(0);
    } else {
      return;
    }
  }, [activeIndex, touchEnd, touchStart, context]);

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd]);

  window.addEventListener("touchend", handleTouchEnd);

  const moviesContent =
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

  const content =
    context.loading && context.initialFetch ? (
      <div className="notification">Loading...</div>
    ) : (
      moviesContent
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
