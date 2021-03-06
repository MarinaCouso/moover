import { fireEvent, render, waitFor } from "@testing-library/react-native";

import { InputText } from "./input";
import React from "react";

const mockOnChange = jest.fn();

describe("Text input component renders correctly", () => {
  it("should render properly", () => {
    const { queryByTestId } = render(
      <InputText inputValue="Rachel" onChangeText={mockOnChange} />
    );

    const textInput = queryByTestId("text-input");
    expect(textInput).toBeTruthy();
  });

  it("should render and change value properly", () => {
    const { queryByTestId } = render(
      <InputText inputValue="Rachel" onChangeText={mockOnChange} />
    );

    const textInput = queryByTestId("text-input");
    expect(textInput.props.value).toBe("Rachel");

    fireEvent.changeText(textInput, "Pep");

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("Pep");
  });
});
