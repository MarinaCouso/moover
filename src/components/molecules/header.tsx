import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import defaultTheme from "../../theme/theme";
import { Text } from "../atoms/text";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle?: TextStyle;
  titleStyle?: TextStyle;
  title: string;
  subtitle?: string;
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
    color: defaultTheme.$primaryColor,
    textAlign: "center",
  },
});

const Header = ({
  containerStyle,
  titleStyle,
  subtitleStyle,
  title,
  subtitle,
}: Props) => (
  <View style={containerStyle}>
    <Text bold text={title} style={titleStyle} />
    {subtitle ? <Text style={subtitleStyle} text={subtitle} /> : null}
  </View>
);

Header.defaultProps = {
  containerStyle: styles.containerStyle,
  subtitleStyle: styles.subTitle,
};

export { Header };
