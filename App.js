import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Events space"/>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
