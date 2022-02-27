import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import defaultTheme from "../../theme/theme";
import { Button } from "../atoms/button";
import { InputText } from "../atoms/input";

type Props = {
  containerStyle?: ViewStyle;
  inputValue: string;
  setInputValue: (newText: string) => void;
  onSearch: () => void;
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
  containerStyle,
  inputValue,
  setInputValue,
  onSearch,
}: Props) => (
  <View style={containerStyle}>
    <InputText
      placeholder="Type here..."
      inputValue={inputValue}
      onChangeText={(newText) => setInputValue(newText)}
    />
    <Button containerStyle={styles.button} title="Search" onPress={onSearch} />
  </View>
);

SearchForm.defaultProps = {
  containerStyle: styles.containerStyle,
};

export { SearchForm };
