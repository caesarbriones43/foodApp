import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Category,
  Restaurant,
  FeaturedDishes,
  HomeScreen,
  MenuScreen,
  WelcomeScreen,
  Register,
  Login,
  Admin,
  ListUsers,
  UserDetails,
  CreateCategory,
  CreateDishes,
  ListDish,
  DishDetails,
  HomeReal,
  MoreDetails,
  Checkout,
  ShareMedia,
  ListOrders,
  OrderDetails,
  LoginAdmin,
} from "./src/components/Index";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      ></Stack.Screen>

      <Stack.Screen name="ShareMedia" component={ShareMedia}></Stack.Screen>
      <Stack.Screen name="HomeReal" component={HomeReal}></Stack.Screen>
      <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="MenuScreen" component={MenuScreen}></Stack.Screen>
      <Stack.Screen name="Category" component={Category}></Stack.Screen>
      <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Admin" component={Admin}></Stack.Screen>
      <Stack.Screen name="UserDetails" component={UserDetails}></Stack.Screen>
      <Stack.Screen name="ListUsers" component={ListUsers}></Stack.Screen>
      <Stack.Screen name="CreateDishes" component={CreateDishes}></Stack.Screen>
      <Stack.Screen name="ListDish" component={ListDish}></Stack.Screen>
      <Stack.Screen name="DishDetails" component={DishDetails}></Stack.Screen>
      <Stack.Screen name="MoreDetails" component={MoreDetails}></Stack.Screen>
      <Stack.Screen name="Checkout" component={Checkout}></Stack.Screen>
      <Stack.Screen name="ListOrders" component={ListOrders}></Stack.Screen>
      <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>
      <Stack.Screen name="LoginAdmin" component={LoginAdmin}></Stack.Screen>

      <Stack.Screen
        name="CreateCategory"
        component={CreateCategory}
      ></Stack.Screen>
      <Stack.Screen
        name="FeaturedDishes"
        component={FeaturedDishes}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
