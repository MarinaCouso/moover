import { ResultsSection } from "./results-section";
import { render } from "@testing-library/react-native";
import React from "react";
import { strings } from "../../strings";

const mockMoviesList = [
  {
    id: 1,
    title: "Jack Reacher",
    image: "https://picsum.photos/200/300",
    date: "2012-12-20",
  },
  {
    id: 2,
    title: "Jack Reacher: Never Go Back",
    image: "https://picsum.photos/200/300",
    date: "2016-10-19",
  },
];

describe("Results section renders correctly", () => {
  it("should render title properly", () => {
    const { getByText } = render(
      <ResultsSection moviesList={mockMoviesList} isLoading={false} />
    );

    const title = getByText("Jack Reacher");
    expect(title).toBeTruthy();
  });

  it("should calculate and render year properly", () => {
    const { getByText } = render(
      <ResultsSection moviesList={mockMoviesList} isLoading={false} />
    );

    const year = getByText("2016");
    expect(year).toBeTruthy();
  });

  it("should render error text", () => {
    const { getByText } = render(
      <ResultsSection moviesList={[]} isLoading={false} />
    );

    const errorText = getByText(strings.results.noResults);
    expect(errorText).toBeTruthy();
  });
});
