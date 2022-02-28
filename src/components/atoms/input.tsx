import React from "react";
import { TextInput, StyleSheet } from "react-native";
import defaultTheme from "../../theme/theme";

type Props = {
  style?: object;
  inputValue: string;
  placeholder: string;
  onChangeText: (newText: string) => void;
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: defaultTheme.$baseColor,
    width: "40%",
    padding: 5,
    color: defaultTheme.$primaryColor,
    fontSize: 17,
    borderRadius: 7,
  },
});

const InputText = ({ style, inputValue, placeholder, onChangeText }: Props) => (
  <TextInput
    style={style}
    placeholder={placeholder}
    value={inputValue}
    onChangeText={onChangeText}
  />
);

InputText.defaultProps = {
  style: styles.textInput,
};

export { InputText };
