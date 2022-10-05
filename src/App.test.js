import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", async () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(
    /NASA: Picture of the day/
  );
});
