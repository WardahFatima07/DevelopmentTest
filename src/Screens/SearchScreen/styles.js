import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Utils/Units';
import themeColors from '../../Utils/themeColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.white,
    alignItems: 'center',
    paddingHorizontal: vw * 3,
  },
  inputContainer: {
    marginVertical: vh * 2,
  },
  textStyle: {fontSize: vh * 1.6, color: themeColors.black},
});

export default styles;
