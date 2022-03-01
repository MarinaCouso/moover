import { Divider } from "./divider";
import { render } from "@testing-library/react-native";
import React from "react";
import defaultTheme from "../../theme/theme";

describe("Divider component renders correctly", () => {
  it("should render divider with bottom border", () => {
    const { queryByTestId } = render(<Divider />);

    const divider = queryByTestId("divider");
    expect(divider).toBeTruthy();
    expect(divider.props.style.borderBottomColor).toBe(
      defaultTheme.$secondaryColor
    );
  });

  it("should render divider without bottom border", () => {
    const { queryByTestId } = render(<Divider transparent />);

    const divider = queryByTestId("divider");
    expect(divider.props.style.borderBottomColor).toBeFalsy();
  });
});
