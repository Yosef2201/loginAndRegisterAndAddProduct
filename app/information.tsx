import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Information = () => {
  const data = useLocalSearchParams();  // Destructure the 'yosef' parameter

  return (
    <View style={styles.container}>
      <Text >{data.productName}</Text>
      <Text >{data.price}</Text>
      <Text >{data.Image}</Text>


    
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Information;
