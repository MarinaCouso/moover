import { SearchForm } from "./search-form";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

const mockSetInputValue = jest.fn();
const mockOnSearch = jest.fn();

const mockProps = {
  setInputValue: mockSetInputValue,
  onSearch: mockOnSearch,
  buttonTitle: "Click here!",
  inputValue: "Movie title",
  placeholder: "Write here",
};

describe("Search form renders correctly", () => {
  it("should render input value properly", () => {
    const { queryByTestId } = render(<SearchForm {...mockProps} />);

    const input = queryByTestId("text-input");
    expect(input).toBeTruthy();
    expect(input.props.value).toBe("Movie title");
  });

  it("should call onSearch when button pressed", () => {
    const { getByText } = render(<SearchForm {...mockProps} />);

    const button = getByText("Click here!");

    fireEvent(button, "press");

    expect(mockOnSearch).toBeCalledTimes(1);
  });
});
