import React, { useState } from "react";
import { TextStyle, View, ViewStyle } from "react-native";

import { Divider } from "../../atoms/divider";
import { IMAGE_PLACEHOLDER } from "../../../constants";
import { Image } from "../../atoms/image";
import { Text } from "../../atoms/text";
import styles from "./styles";

type Props = {
  containerStyle?: ViewStyle;
  subtitleStyle?: TextStyle;
  titleStyle?: TextStyle;
  title: string;
  text: string;
  imageUrl: string;
};

const Card = ({
  containerStyle,
  titleStyle,
  subtitleStyle,
  title,
  text,
  imageUrl,
}: Props) => (
  <View style={containerStyle} testID="card-container">
    <View style={styles.imageContainer}>
      <Image
        placeholder={IMAGE_PLACEHOLDER}
        imageStyle={styles.imageStyle}
        imageUrl={imageUrl}
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
