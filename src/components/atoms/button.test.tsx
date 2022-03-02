import { fireEvent, render } from "@testing-library/react-native";

import { Button } from "./button";
import React from "react";
import defaultTheme from "../../theme/theme";

const mockOnPress = jest.fn();

describe("Button component renders correctly", () => {
  it("should render title properly", () => {
    const { getByText } = render(
      <Button title="This is a button" onPress={mockOnPress} />
    );

    const button = getByText("This is a button");
    expect(button).toBeTruthy();
    expect(button.props.style.color).toBe(defaultTheme.$baseColor);
  });

  it("should run mockOnPress", () => {
    const { queryByTestId } = render(
      <Button title="This is a button" onPress={mockOnPress} />
    );

    const button = queryByTestId("button");

    fireEvent(button, "press");

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
