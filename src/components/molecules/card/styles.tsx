import { StyleSheet } from "react-native";
import defaultTheme from "../../../theme/theme";

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    shadowColor: defaultTheme.$secondaryColor,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 20,
    backgroundColor: defaultTheme.$primaryColor,
    width: "80%",
    alignSelf: "center",
    height: 250,
    padding: 10,
    borderRadius: 10,
  },
  subTitle: {
    fontSize: 17,
    padding: 5,
    color: defaultTheme.$baseColor,
  },
  titleStyle: {
    fontSize: 17,
    padding: 5,
    color: defaultTheme.$baseColor,
  },
  imageStyle: {
    width: "100%",
    height: "auto",
    resizeMode: "cover",
    padding: 5,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 7,
  },
});

export default styles;
