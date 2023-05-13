import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import store from "./components/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/productWrapper";
import UserList from "./components/UserList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={ProductWrapper} />
          <Stack.Screen name="UserList" component={UserList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
