import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { login } from '../API/fechApi';  

const Index = () => {
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');
  const Nav = useNavigation();

  const goToHome = () => {
    const body = {
      phone: name,  
      password: password,
    };
  
    login(body)
      .then((response) => {
        console.log('Response from server:', response); 
        if (response.success) {
          Nav.navigate('Home');
        } else {
          alert('Invalid credentials, please try again.')
        }
      })
      .catch((error) => {
        console.error('Login error:', error.message);  
        alert('An error occurred, please check your connection and try again.');
      });
  };
  
  return (
    <View style={styles.container}>
      <Text>Name (Phone)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}  
        value={name}
        placeholder="Enter your phone number"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}  
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true} 
      />
      <Button 
        onPress={goToHome}
        title="Go to Home"
      />
      <Button title='Reigister' onPress={()=>Nav.navigate('Register')}/>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});
