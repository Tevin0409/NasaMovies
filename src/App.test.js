import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /nasa: picture of the day/i,
    })
  );
  screen.getByAltText(/pic of the day/i);
  // expect(screen.getByRole("heading")).toHaveTextContent(
  //   /NASA: Picture of the day/
  // );
});
