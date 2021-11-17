import { render, fireEvent } from "@testing-library/react";
import MovieItem from "./MovieItem";

const mockedOnClick = jest.fn();

describe("MovieItem component", () => {
  test("renders properly first movie card", () => {
    const { getByText } = render(
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
    expect(getByText(/Inferno/i)).toBeTruthy();
  });

  test("renders both action buttons", () => {
    const { getByTestId } = render(
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
    expect(getByTestId("accept-button")).toBeTruthy();
    expect(getByTestId("reject-button")).toBeTruthy();
  });
});

describe("Action buttons", () => {
  test("triggers setActiveIndex function", () => {
    const { getByTestId } = render(
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

    fireEvent.click(getByTestId("accept-button"));
    expect(mockedOnClick).toHaveBeenCalled();

    fireEvent.click(getByTestId("reject-button"));
    expect(mockedOnClick).toHaveBeenCalled();
  });
});
