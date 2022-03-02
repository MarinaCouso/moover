import { Pressable, StyleSheet, TextStyle, ViewStyle } from "react-native";

import React from "react";
import { Text } from "./text";
import defaultTheme from "../../theme/theme";

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
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    fontSize: 17,
    color: defaultTheme.$baseColor,
  },
});

const Button = ({ containerStyle, textStyle, title, onPress }: Props) => (
  <Pressable testID="button" style={containerStyle} onPress={onPress}>
    <Text bold text={title} style={textStyle} />
  </Pressable>
);

Button.defaultProps = {
  containerStyle: styles.container,
  textStyle: styles.text,
  text: "Button",
};

export { Button };
