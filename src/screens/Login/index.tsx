import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const LoginPage: FC = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder="id" />
      <TextInput style={styles.input} placeholder="pw" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default LoginPage;
