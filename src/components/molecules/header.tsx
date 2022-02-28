import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { strings } from "../../strings";
import { Text } from "../atoms/text";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle?: TextStyle;
};

const styles = StyleSheet.create({
  containerStyle: {
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 20,
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
    <Text bold text={strings.header.title} />
    <Text style={subtitleStyle} text={strings.header.subtitle} />
  </View>
);

Header.defaultProps = {
  containerStyle: styles.containerStyle,
  subtitleStyle: styles.subTitle,
};

export { Header };
