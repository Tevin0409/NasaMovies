import React from "react";
import { render, screen } from "@testing-library/react";
import mockFetch from "../mocks/mockFetch";
import Home from "./Home";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders homepage", async () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", {
      name: /nasa: picture of the day/i,
    })
  );
});
