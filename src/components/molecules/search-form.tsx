import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { strings } from "../../strings";
import defaultTheme from "../../theme/theme";
import { Button } from "../atoms/button";
import { InputText } from "../atoms/input";

type Props = {
  containerStyle?: ViewStyle;
  inputValue: string;
  setInputValue: (newText: string) => void;
  onSearch: () => void;
  placeholder?: string;
  buttonTitle: string;
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  button: {
    backgroundColor: defaultTheme.$primaryColor,
    width: "40%",
    padding: 5,
    borderRadius: 7,
    marginLeft: 10,
  },
});

const SearchForm = ({
  buttonTitle,
  containerStyle,
  inputValue,
  setInputValue,
  onSearch,
  placeholder,
}: Props) => (
  <View style={containerStyle}>
    <InputText
      placeholder={placeholder}
      inputValue={inputValue}
      onChangeText={(newText) => setInputValue(newText)}
    />
    <Button
      containerStyle={styles.button}
      title={buttonTitle}
      onPress={onSearch}
    />
  </View>
);

SearchForm.defaultProps = {
  containerStyle: styles.containerStyle,
};

export { SearchForm };
