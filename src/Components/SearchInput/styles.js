import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/Units";
import themeColors, { shadow } from "../../Utils/themeColors";

const styles = StyleSheet.create({
  iconStyle: {
    height: vh * 1.8,
    width: vh * 1.8,
    resizeMode: "contain",
  },
  iconContainer: {
    height: vh * 2,
    width: vh * 2,
    borderRadius: (vh * 2) / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeColors.white,
    marginLeft: vw * 2,
    ...shadow,
  },
  crossIconStyle: {
    height: vh * 1,
    width: vh * 1,
    resizeMode: "contain",
  },
  inputContainer: {
    width: vw * 80,
    height: vw * 80 * 0.14,
    backgroundColor: themeColors.white,
    flexDirection: "row",
    borderColor: themeColors.inputBorder,
    borderWidth: 1,
    borderRadius: vw * 7,
    alignItems: "center",
    paddingHorizontal: 5 * vw,
  },
  input: {
    // backgroundColor: "red",
    fontSize: 1.6 * vh,
    color: themeColors.black,
    flex: 1,
    padding: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft: vw * 3,
  },
});
export default styles;
