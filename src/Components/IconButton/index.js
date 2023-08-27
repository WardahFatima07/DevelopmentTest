import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const IconButton = props => {
  const {style, onPress, icon, iconStyle} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, style]}
      hitSlop={styles.hitSlop}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};
export default IconButton;
