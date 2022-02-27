import React from "react";
import { View, ViewStyle, TextStyle, Image } from "react-native";
import { Divider } from "../../atoms/divider";
import { Text } from "../../atoms/text";
import styles from "./styles";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle?: TextStyle;
  titleStyle?: TextStyle;
};

const Card = ({ containerStyle, titleStyle, subtitleStyle }: Props) => (
  <View style={containerStyle}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.imageStyle}
        source={{ uri: "https://www.fillmurray.com/640/360" }}
      />
    </View>
    <View style={styles.textContainer}>
      <Text bold style={titleStyle} text="Movie title" />
      <Text style={titleStyle} text="Movie title" />
      <Divider transparent />
      <Text bold style={subtitleStyle} text="Movie year" />
      <Text style={subtitleStyle} text="Movie year" />
    </View>
  </View>
);

Card.defaultProps = {
  containerStyle: styles.containerStyle,
  subtitleStyle: styles.subTitle,
  titleStyle: styles.titleStyle,
};

export { Card };
