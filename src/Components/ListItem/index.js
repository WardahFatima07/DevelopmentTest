import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ListItem = props => {
  const {title, body} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.bodyText}>{body}</Text>
    </View>
  );
};

export default ListItem;
