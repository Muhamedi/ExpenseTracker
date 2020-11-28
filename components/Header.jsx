import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/header.style';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

export default Header;
