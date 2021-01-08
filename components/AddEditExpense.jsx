import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/login.style';

const AddEditExpense = props => {
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState('');
  return (
    <View style={styles.layout}>
      <View style={styles.formInput}>
        <Text>Title:</Text>
        <TextInput
          value={title}
          onChangeText={title => setTitle(title)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.formInput}>
        <Text>Cost:</Text>
        <TextInput
          value={cost}
          onChangeText={cost => setCost(cost)}
          style={styles.textInput}
        />
      </View>
      <Button
        style={styles.loginButton}
        title='Save'
        onPress={() => {
          props.saveExpense(title, cost);
          props.addEditExpenseHandler();
        }}
        color='#841584'
      />
    </View>
  );
};

export default AddEditExpense;
