import React from "react";
import { Card } from "./card";
import { render } from "@testing-library/react-native";
import defaultTheme from "../../../theme/theme";

const mockProps = {
  containerStyle: { backgroundColor: defaultTheme.$backgroundColor },
  title: "Movie",
  text: "Year",
  imageUrl: "https://picsum.photos/200/300",
};

describe("Card component renders correctly", () => {
  it("should render texts properly", () => {
    const { getByText } = render(<Card {...mockProps} />);

    const title = getByText("Movie");
    expect(title).toBeTruthy();
    const text = getByText("Year");
    expect(text).toBeTruthy();
  });

  it("should render styles properly", () => {
    const { queryByTestId } = render(<Card {...mockProps} />);

    const cardContainer = queryByTestId("card-container");
    expect(cardContainer.props.style.backgroundColor).toBe(
      defaultTheme.$backgroundColor
    );
  });

  it("should render image  properly", () => {
    const { queryByTestId } = render(<Card {...mockProps} />);

    const image = queryByTestId("image");
    expect(image.props.source.uri).toBe("https://picsum.photos/200/300");
  });
});
