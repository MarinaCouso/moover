import React from "react";
import { Text as TextNativeComponent, TextStyle } from "react-native";
import defaultTheme from "../../theme/theme";

type Props = {
  style?: TextStyle;
  text: string;
};

const Text = ({ style, text }: Props) => (
  <TextNativeComponent style={style}>{text}</TextNativeComponent>
);

Text.defaultProps = {
  style: {
    fontSize: 30,
    padding: 5,
    color: defaultTheme.$primaryColor,
    textAlign: "center",
  },
};

export { Text };
