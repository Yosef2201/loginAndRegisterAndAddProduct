import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createProduct } from '@/API/fechApi'
import { useNavigation } from 'expo-router'

const AddProduct = () => {
    const Nav=useNavigation()
    const [productName,setProductName]=useState('')
    const [price,setPrice]=useState('')
    const [Image,setImage]=useState('')
const AddProductTo=()=>{
    const body={
        productName:productName,
Image:Image,
price:price

    }
    createProduct(body)
    .then((Response)=>{
        if(Response.success==true)
          Nav.navigate('Home')
        else
        alert('Problem')  
    })
}
  return (
    <View>
      <TextInput
         style={styles.input}
         onChangeText={setProductName}  
         value={productName}
         placeholder="Enter Product Name"
       />
       <TextInput
         style={styles.input}
         onChangeText={setPrice}  
         value={price}
         placeholder="Enter Price"
       /><TextInput
       style={styles.input}
       onChangeText={setImage}  
       value={Image}
       placeholder="Enter Image"
     />
     <Button title='Add Product' onPress={AddProductTo}/>
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({})