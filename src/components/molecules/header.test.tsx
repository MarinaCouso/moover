import { Header } from "./header";
import { render } from "@testing-library/react-native";
import React from "react";
import defaultTheme from "../../theme/theme";

describe("Header component renders correctly", () => {
  it("should render texts properly", () => {
    const { getByText } = render(<Header title="Title" subtitle="Subtitle" />);

    const title = getByText("Title");
    expect(title).toBeTruthy();
    const text = getByText("Subtitle");
    expect(text).toBeTruthy();
  });

  it("should render styles properly", () => {
    const { getByText } = render(<Header title="Title" />);

    const title = getByText("Title");
    expect(title.props.style.color).toBe(defaultTheme.$primaryColor);
  });
});
