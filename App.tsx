import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/RegisterScreen";
import TabNavigator from "./navigator/TabNavigator";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Tab" component={TabNavigator}></Stack.Screen> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen> */}
        {/* <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen> */}
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
