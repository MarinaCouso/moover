import React from "react";
import { Text } from "./text";
import { render } from "@testing-library/react-native";

describe("Text component renders correctly", () => {
  it("should render child text properly", () => {
    const { getByText } = render(<Text text="This is a text" />);

    const text = getByText("This is a text");
    expect(text).toBeTruthy();
  });

  it("should render styles properly", () => {
    const { queryByTestId } = render(<Text text="This is a text" bold />);

    const text = queryByTestId("text");
    expect(text.props.style.fontWeight).toBe("bold");
  });
});
