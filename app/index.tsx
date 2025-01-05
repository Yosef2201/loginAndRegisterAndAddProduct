import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { login } from '../API/fechApi';  // וודא שהנתיב נכון

const Index = () => {
  const [name, setName] = useState('');  // עבור שם משתמש (במקרה זה מספר טלפון)
  const [password, setPassword] = useState('');  // עבור סיסמה
  const Nav = useNavigation();

  // פונקציה שנקראת בעת לחיצה על כפתור "Go to Home"
  const goToHome = () => {
    const body = {
      phone: name,  // שימוש במשתנה name כטלפון
      password: password,
    };
  
    login(body)
      .then((response) => {
        console.log('Response from server:', response);  // הדפסת התגובה מהשרת
        if (response.success) {
          Nav.navigate('Home');
        } else {
          alert('Invalid credentials, please try again.');
        }
      })
      .catch((error) => {
        console.error('Login error:', error.message);  // הדפסת השגיאה ב-console
        alert('An error occurred, please check your connection and try again.');
      });
  };
  
  return (
    <View style={styles.container}>
      <Text>Name (Phone)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}  // עדכון מצב שם
        value={name}
        placeholder="Enter your phone number"
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}  // עדכון מצב סיסמה
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}  // להסתיר את הסיסמה
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
