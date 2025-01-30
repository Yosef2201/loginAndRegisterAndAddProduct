import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { useNavigation } from 'expo-router';
import { getAllProducts } from '@/API/fechApi'; 

const Home = () => {
  const [products, setProducts] = useState([]);  
  const Nav = useNavigation();  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();  
        console.log(response);  
        setProducts(response.data || []);  
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();  
  }, []); 
const renderCard=()=>{
    return products.map((item:any)=>(
      <TouchableOpacity onPress={() => Nav.navigate('information', {  ...item})}>

        <Card
        key={item._id}
        productName={item.productName}
        price={item.price}
        Image={item.Image}
      />
            </TouchableOpacity>

    ))
}
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
     
  {renderCard()}
      </ScrollView>
      <Button title="Add Product" onPress={() => Nav.navigate('AddProduct')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  scrollContainer: {
    // justifyContent: 'center',
  },
});

export default Home;
