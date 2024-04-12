import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders port calls", () => {
  render(<App />);
  const linkElement = screen.getByText(/There are \d+ portcalls./);
  expect(linkElement).toBeInTheDocument();
});
