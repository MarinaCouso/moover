import React from "react";
import { Image } from "./image";
import { render } from "@testing-library/react-native";

describe("Image component renders correctly", () => {
  it("should render image properly", () => {
    const { queryByTestId } = render(
      <Image imageUrl="https://picsum.photos/200/300" />
    );

    const image = queryByTestId("image");
    expect(image.props.source.uri).toBe("https://picsum.photos/200/300");
  });
});
