import React from "react";
import { Image, TextInput, View } from "react-native";
import styles from "./styles";
import themeColors from "../../Utils/themeColors";
import { icons } from "../../Assets/Images";
import IconButton from "../IconButton";

const SearchInput = props => {
  const {
    style,
    inputStyle,
    value,
    onChangeText,
    onSubmitEditing,
    cross,
    clearBtnPress,
  } = props;
  return (
    <View style={[styles.inputContainer, style]}>
      <Image source={icons.searchIcon} style={styles.iconStyle} />
      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        placeholderTextColor={themeColors.lightGrey}
        selectionColor={themeColors.yellow}
        returnKeyType="search"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      {cross && (
        <IconButton
          style={styles.iconContainer}
          iconStyle={styles.crossIconStyle}
          icon={icons.crossIcon}
          onPress={clearBtnPress}
        />
      )}
    </View>
  );
};

export default SearchInput;
