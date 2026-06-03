import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home intro", () => {
  render(<App />);
  const heading = screen.getByText(/hi there/i);
  expect(heading).toBeInTheDocument();
});
