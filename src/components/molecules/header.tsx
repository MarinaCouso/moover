import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import defaultTheme from "../../theme/theme";
import { Button } from "../atoms/button";
import { Text } from "../atoms/text";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle: TextStyle;
};

const styles = StyleSheet.create({
  containerStyle: {
    alignContent: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 17,
    padding: 5,
    color: "#4634DA",
    textAlign: "center",
  },
});

const Header = ({ containerStyle, subtitleStyle }: Props) => (
  <View style={containerStyle}>
    <Text text="Moover" />
    <Text style={subtitleStyle} text="Your movies search app!" />
  </View>
);

Header.defaultProps = {
  containerStyle: styles.containerStyle,
  subtitleStyle: styles.subTitle,
};

export { Header };
