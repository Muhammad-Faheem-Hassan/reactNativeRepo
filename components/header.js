import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useAnimatedValue } from 'react-native';
import { useSelector } from 'react-redux';


export default function Header() {

const cartData = useSelector((state) => state.reducer)
const [cartItem, setCartItem] = useState(0);
console.log("========>cart data",cartData);

useEffect(() => {
setCartItem(cartData.length)

},[cartData])

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,textAlign:'right',backgroundColor:'orange',padding:10, marginTop:5,}}>{cartItem}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
