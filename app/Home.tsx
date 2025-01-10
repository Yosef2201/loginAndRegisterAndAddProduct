import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <Card
            key={product._id}
            productName={product.productName}
            price={product.price}
            Image={product.Image}
          />
        ))}
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
    flexGrow: 1,
    // justifyContent: 'center',
  },
});

export default Home;
