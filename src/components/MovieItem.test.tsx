import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieItem from "./MovieItem";

const mockedOnClick = jest.fn();

describe("MovieItem component", () => {
  test("renders properly first movie card", () => {
    render(
      <MovieItem
        imageURL="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
        title="Inferno"
        summary="Robert Langdon budzi się we florenckim szpitalu i za sprawą tajemniczego przedmiotu zostaje celem obławy. Ucieka z pomocą doktor Sienny, podążając śladem wskazówek zawartych w poemacie Dantego."
        rating={7.3}
        id="1"
        activeIndex={0}
        setActiveIndex={mockedOnClick}
      />
    );
    const cardElement = screen.getByText(/Inferno/i);
    expect(cardElement).toBeInTheDocument();
  });

  // test("receives proper activeIndex after button is clicked", () => {
  //   render(
  //     <MovieItem
  //       imageURL="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  //       title="Inferno"
  //       summary="Robert Langdon budzi się we florenckim szpitalu i za sprawą tajemniczego przedmiotu zostaje celem obławy. Ucieka z pomocą doktor Sienny, podążając śladem wskazówek zawartych w poemacie Dantego."
  //       rating={7.3}
  //       id="1"
  //       activeIndex={0}
  //       setActiveIndex={mockedOnClick}
  //     />
  //   );
  //   const buttonElement = screen.getByRole("button", { name: /Accept/i });
  //   userEvent.click(buttonElement);

  //   const cardElement = screen.getByText(/Star Wars/i);
  //   expect(cardElement).toBeInTheDocument();
  // });
});
