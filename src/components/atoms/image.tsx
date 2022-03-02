import { ImageStyle, Image as NativeImageComponent } from "react-native";
import React, { useState } from "react";

import { IMAGE_PLACEHOLDER } from "../../constants";
import { StyleSheet } from "react-native";

type Props = {
  imageUrl: string;
  imageStyle?: ImageStyle;
  placeholder?: string;
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "auto",
    resizeMode: "cover",
    padding: 5,
    flex: 1,
  },
});

const Image = ({ imageUrl, imageStyle, placeholder }: Props) => {
  const [imageToRender, setImageToRender] = useState(imageUrl);

  return (
    <NativeImageComponent
      onError={() =>
        setImageToRender(placeholder ? placeholder : IMAGE_PLACEHOLDER)
      }
      testID="image"
      style={imageStyle}
      source={{ uri: imageToRender }}
    />
  );
};

Image.defaultProps = {
  imageStyle: styles.imageStyle,
};

export { Image };
