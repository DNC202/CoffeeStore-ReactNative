import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Button from "../components/Button";

const Stack = createNativeStackNavigator();

const WelcomeScreen = () => {
  return (
    <View style={styles.primaryContainer}>
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.marginText}
      />
      <View style={[styles.secondaryContainer]}>
        <Image
          style={styles.resize}
          source={require("../assets/images/coffeeCupLogin.png")}
        ></Image>
      </View>

      <Button title={"Login"} onPress={LoginScreen}></Button>
      <Text style={styles.Text}>Don't have an account ?</Text>
      <Button title={"Register"} onPress={LoginScreen}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: "#FFCA7A",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },

  marginText: {
    marginTop: 140,
    marginBottom: 20,
  },

  resize: {
    width: 250,
    height: 250,
  },

  Text: {
    color: "#B08B54",
  },
  secondaryContainer: {
    backgroundColor: "#FED4B5",
    height: 300,
    width: 300,
    borderRadius: 150,
    alignItems: "center",
  },
});

export default WelcomeScreen;
