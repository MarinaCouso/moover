import React from "react";
import { TextInput } from "react-native";
import defaultTheme from "../../theme/theme";

type Props = {
  style?: object;
  inputValue: string;
  placeholder: string;
  onChangeText: (newText: string) => void;
};

const InputText = ({ style, inputValue, placeholder, onChangeText }: Props) => (
  <TextInput
    style={style}
    placeholder={placeholder}
    value={inputValue}
    onChangeText={onChangeText}
  />
);

InputText.defaultProps = {
  style: {
    backgroundColor: defaultTheme.$baseColor,
    width: "40%",
    padding: 5,
    color: defaultTheme.$primaryColor,
    fontSize: 17,
    borderRadius: 7,
  },
};

export { InputText };
