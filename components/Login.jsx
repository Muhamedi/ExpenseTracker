import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../styles/login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.layout}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
    </View>
  );
};

export default Login;
