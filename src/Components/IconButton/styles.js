import { StyleSheet } from "react-native";
import { vw } from "../../Utils/Units";

const styles = StyleSheet.create({
  container: {},
  icon: {
    height: 3.5 * vw,
    resizeMode: "contain",
    width: 3.5 * vw,
  },
  hitSlop: {
    top: 10,
    right: 10,
    left: 10,
    bottom: 10,
  },
});
export default styles;
