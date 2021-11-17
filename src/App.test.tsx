import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders properly on the screen", () => {
    render(<App />);
    const cardElement = screen.getByText(/Movie Tinder/i);
    expect(cardElement).toBeInTheDocument();
  });
});
