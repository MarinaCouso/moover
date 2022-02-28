import { Button } from "./button";
import { render } from "@testing-library/react-native";
import React from "react";
import defaultTheme from "../../theme/theme";

describe("Divider component renders correctly", () => {
  it("should render title properly", () => {
    const { getByText } = render(
      <Button title="This is a button" onPress={() => {}} />
    );

    const text = getByText("This is a button");
    expect(text).toBeTruthy();
    expect(text.props.style.color).toBe(defaultTheme.$baseColor);
  });

  it("should not render title", () => {
    const { queryByTestId } = render(
      <Button title="This is a button" onPress={() => {}} />
    );

    const title = queryByTestId("divider-text");
    expect(title).toBeFalsy();
  });
});
