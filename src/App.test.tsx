import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders properly on the screen", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Movie Tinder/i)).toBeTruthy();
  });
});
