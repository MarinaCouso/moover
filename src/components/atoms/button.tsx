import React from "react";
import { Pressable, StyleSheet, TextStyle, ViewStyle } from "react-native";
import defaultTheme from "../../theme/theme";
import { Text } from "./text";

type Props = {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTheme.$primaryColor,
    width: "40%",
    padding: 5,
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    color: defaultTheme.$baseColor,
  },
});

const Button = ({ containerStyle, textStyle, title, onPress }: Props) => (
  <Pressable style={containerStyle} onPress={onPress}>
    <Text text={title} style={textStyle} />
  </Pressable>
);

Button.defaultProps = {
  containerStyle: styles.container,
  textStyle: styles.text,
  text: "Button",
};

export { Button };
