import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";

import Header from "./header";
import Product from "./product";

export default function ProductWrapper({ navigation }) {
  const product = [
    {
      name: "samsung",
      color: "red",
      price: "1000",
      image:
        "https://media.istockphoto.com/id/1213025546/photo/samsung-galaxy-s20-on-a-white-background.jpg?s=612x612&w=0&k=20&c=FCKUL3IWOsaB0GTmrWPLcntjipOlGCs5LxdEXIMZDb0=",
    },
    {
      name: "oppo",
      color: "green",
      price: "5464",
      image:
        "https://media.istockphoto.com/id/1213025546/photo/samsung-galaxy-s20-on-a-white-background.jpg?s=612x612&w=0&k=20&c=FCKUL3IWOsaB0GTmrWPLcntjipOlGCs5LxdEXIMZDb0=",
    },
    {
      name: "huawei",
      color: "white",
      price: "10",
      image:
        "https://media.istockphoto.com/id/1213025546/photo/samsung-galaxy-s20-on-a-white-background.jpg?s=612x612&w=0&k=20&c=FCKUL3IWOsaB0GTmrWPLcntjipOlGCs5LxdEXIMZDb0=",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Header />
        <Button
          title="Go To User List"
          onPress={() => navigation.navigate("UserList")}
        />
      
        <ScrollView>
          {product.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
  },
});
