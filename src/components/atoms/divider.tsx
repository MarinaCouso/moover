import { StyleSheet, View, ViewStyle } from "react-native";

import React from "react";
import defaultTheme from "../../theme/theme";

type Props = {
  style?: ViewStyle;
  transparent?: boolean;
};

const styles = StyleSheet.create({
  dividerStyle: {
    marginTop: "7%",
    marginBottom: "7%",
    width: "30%",
    alignSelf: "center",
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: defaultTheme.$secondaryColor,
  },
});

const Divider = ({ style, transparent }: Props) => {
  const appliedStyles = StyleSheet.flatten([
    style ? style : styles.dividerStyle,
    transparent ? null : styles.borderStyle,
  ]);
  return <View style={appliedStyles} testID="divider" />;
};

Divider.defaultProps = {
  transparent: false,
};

export { Divider };
