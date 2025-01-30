import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

const Information = () => {
  const data = useLocalSearchParams();  
  const [x,setX]=useState(0)

const adda=()=>{
setX(x+1)  
}
const minA=()=>{
  if(x>0)
  setX(x-1)  
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}} >{data.productName}</Text>
      <Text style={{fontSize:40}} >{data.price}</Text>
      <Text >{data.Image}</Text>
      <TouchableOpacity onPress={adda}>

      <Text style={{fontSize:40}}>+</Text>
      </TouchableOpacity>

<Text style={{fontSize:40}} >{x}</Text>
<TouchableOpacity onPress={minA}>

<Text style={{fontSize:40}}>-</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  }

});

export default Information;
