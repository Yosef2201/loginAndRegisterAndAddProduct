import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { login } from '../API/fechApi';  

const Index = () => {
  const [name, setName] = useState('');  
  const [password, setPassword] = useState('');
  const Nav = useNavigation();

  const goToHome = () => {
const body={
    phone:name, //      ((حسب (المدخل) المستصفح name)=(phone حسب السيرفر )
  password:password //  ((حسب (المدخل) المستصفح password)=(password حسب السيرفر )
}
login(body)   //(نداء للعمليه login وتعوض ال data بمكان ال body )
.then((response)=>{
  console.log(response);

  if (response.success==true) // اذا الاسم والسسما صحيحه وموجوده انتقل الى الصفحه الرئيسيه 
  {
    Nav.navigate('Home') 
  }
    else{
     alert('الاسم او السسما غير صحيحه ')  //اذا لا 
    }
})
      .catch((error) => {      //اذا في مشكله بالسيرفر او الاتصال بالسيرفر 
        console.error('Login error:', error.message);  
        alert('اذا في مشكله بالسيرفر او الاتصال بالسيرفر .');
      }
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Name (Phone)</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}   
        value={name}     
        placeholder="Enter your phone number"
      />
      <Text style={styles.txt}>Password</Text>
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
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor:'brown'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
  txt:{
color:'white'
  }
});
