import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { useNavigation } from 'expo-router';
import { getAllProducts } from '@/API/fechApi';  // Ensure your API path is correct

const Home = () => {
  const [products, setProducts] = useState([]);  // State to store products
  const Nav = useNavigation();  // For navigation to AddProduct screen

  useEffect(() => {
    // Fetch all products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();  // Call the API to get products
        console.log(response);  // Log the response for debugging
        setProducts(response.data || []);  // Correctly use `response.data`
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();  // Fetch products on component mount
  }, []);  // Empty dependency array ensures it runs once when the component mounts
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
