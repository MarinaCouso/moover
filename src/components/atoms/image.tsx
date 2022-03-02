import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image as NativeImageComponent, ImageStyle } from "react-native";
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
  const [imageToRender, setImageToRender] = useState(IMAGE_PLACEHOLDER);

  useLayoutEffect(() => {
    setImageToRender(imageUrl);
  }, []);

  return (
    <>
      <NativeImageComponent
        onError={() =>
          setImageToRender(placeholder ? placeholder : IMAGE_PLACEHOLDER)
        }
        testID="image"
        style={imageStyle}
        source={{ uri: imageToRender }}
      />
    </>
  );
};

Image.defaultProps = {
  imageStyle: styles.imageStyle,
};

export { Image };
