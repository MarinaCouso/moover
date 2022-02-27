import React from "react";
import {
  Text as TextNativeComponent,
  TextStyle,
  StyleSheet,
} from "react-native";
import defaultTheme from "../../theme/theme";

type Props = {
  style?: TextStyle;
  text: string;
  bold?: boolean;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5,
    color: defaultTheme.$primaryColor,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});

const Text = ({ style, text, bold }: Props) => {
  const appliedStyles = StyleSheet.flatten([
    style ? style : styles.text,
    bold ? styles.bold : null,
  ]);
  return (
    <TextNativeComponent style={appliedStyles}>{text}</TextNativeComponent>
  );
};

Text.defaultProps = {
  style: styles.text,
};

export { Text };
