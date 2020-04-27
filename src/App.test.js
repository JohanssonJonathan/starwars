import React from "react";
import { render } from "@testing-library/react";
import Movies from "./components/Movies";

test("renders learn react link", () => {
  const { getByText } = render(<Movies />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
