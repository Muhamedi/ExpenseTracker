import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/card.style';

const Card = props => (
  <View style={styles.card}>
    <View style={styles.info}>
      <Text style={styles.mainInfo}>{props.title}</Text>
      <Text style={styles.mainInfo}>{props.cost}</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.details}>{props.category}</Text>
      <Text style={styles.details}>{props.date}</Text>
    </View>
  </View>
);

export default Card;
