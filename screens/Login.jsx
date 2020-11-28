import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import styles from '../styles/login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.layout}>
      <View style={styles.formInput}>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
        />
      </View>
      <View style={styles.formInput}>
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.textInput}
        />
      </View>
      <Button
        style={styles.loginButton}
        title='Log In'
        color='#841584'
      />
    </View>
  );
};

export default Login;
