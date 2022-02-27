import React from "react";
import { View, ViewStyle, TextStyle, Image } from "react-native";
import { Divider } from "../../atoms/divider";
import { Text } from "../../atoms/text";
import styles from "./styles";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle?: TextStyle;
  titleStyle?: TextStyle;
  title: string;
  text: string;
};

const Card = ({
  containerStyle,
  titleStyle,
  subtitleStyle,
  title,
  text,
}: Props) => (
  <View style={containerStyle}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.imageStyle}
        source={{ uri: "https://www.fillmurray.com/640/360" }}
      />
    </View>
    <View style={styles.textContainer}>
      <Text bold style={titleStyle} text="Title" />
      <Text style={titleStyle} text={title} />
      <Divider transparent />
      <Text bold style={subtitleStyle} text="Release year" />
      <Text style={subtitleStyle} text={text} />
    </View>
  </View>
);

Card.defaultProps = {
  containerStyle: styles.containerStyle,
  subtitleStyle: styles.subTitle,
  titleStyle: styles.titleStyle,
};

export { Card };
