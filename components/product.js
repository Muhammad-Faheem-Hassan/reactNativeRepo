import { StyleSheet, Text, View, Image, Button } from "react-native";
import { addToCart,removeFromCart } from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
     dispatch(removeFromCart(item.name))
  }

  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === item.name 
    })
    if (result.length){
      setIsAdded(true) 
    }else{
      setIsAdded(false)
    }
  }, [cartItems]);
  return (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: "gold",
        borderBottomWidth: 5,
        paddingBottom: 10,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text style={{ fontSize: 24 }}>{item.color}</Text>
      <Text style={{ fontSize: 24 }}>{item.price}</Text>
      <Image style={{ width: 200, height: 300 }} source={{ uri: item.image }} />
      {isAdded ? (
        <Button title="Remove to cart" onPress={() => handleRemoveFromCart(item)} />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Product;
