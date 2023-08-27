import {StyleSheet} from 'react-native';
import themeColors from '../../Utils/themeColors';
import {vh, vw} from '../../Utils/Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
    elevation: 5,
    margin: vw * 2,
    borderRadius: vw * 2,
    padding: vw*3
  },
  titleText: {fontSize: vh * 2, fontWeight: 'bold', color: themeColors.black},
  bodyText: {fontSize: vh * 1.6, color: themeColors.grey},
});

export default styles;
