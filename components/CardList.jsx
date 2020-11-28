import React from 'react';
import Card from './Card';
import { View } from 'react-native';
import styles from '../styles/cardList.style';

const CardList = props => (
  <View style={styles.cardList}>
    {props.expenses.map(expense => (
      <Card
        key={Math.random()}
        title={expense.title}
        cost={expense.cost}
        category={expense.category}
        date={expense.date}
      />
    ))}
  </View>
);

export default CardList;
