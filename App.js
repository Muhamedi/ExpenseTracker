import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expenses from './components/Expenses';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Events space"/>
      <Expenses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
