import React, { useState } from 'react';
import { View, Button } from 'react-native';
import styles from '../styles/expenses.style';
import CardList from '../components/CardList';
import AddEditExpense from '../components/AddEditExpense';

const Expenses = () => {
  const [isAddEdit, setAddEdit] = useState(false);
  const addEditExpenseHandler = () => {
    setAddEdit(isAddEdit => !isAddEdit);
  };

  const existingExpenses = [
    { title: 'Internet', cost: '20$', category: 'Monthly', date: '28.11.2020' },
    { title: 'Rryma', cost: '10$', category: 'Monthly', date: '12.20.2020' },
    {
      title: 'Kafe',
      cost: '35$',
      category: 'Food & Drinks',
      date: '20.01.2021',
    },
    {
      title: 'Ushqim',
      cost: '75$',
      category: 'Food & Drinks',
      date: '17.10.2021',
    },
    { title: 'Qiraja', cost: '230$', category: 'Monthly', date: '02.02.2021' },
  ];
  return (
    <View style={styles.main}>
      {isAddEdit && <AddEditExpense />}
      {!isAddEdit && (
        <View>
          <CardList expenses={existingExpenses} />
          <Button title='Add' onPress={addEditExpenseHandler} />
        </View>
      )}
    </View>
  );
};

export default Expenses;
