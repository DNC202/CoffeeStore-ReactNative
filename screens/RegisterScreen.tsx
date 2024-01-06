import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import LoginScreen from "./LoginScreen";

const RegisterScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.LogoContainer}>
        <Image
          source={require("../assets/images/coffeeCupLogin.png")}
          style={styles.Logo}
        ></Image>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={{ textAlign: "center", fontSize: 26, fontWeight: "500" }}>
          Sign Up
        </Text>
        <View style={{ height: 20 }} />
        <View style={styles.input}>
          <TextInput placeholder="Email Address" keyboardType="email-address" />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View
          style={[
            styles.input,
            { flexDirection: "row", justifyContent: "space-between" },
          ]}
        >
          <TextInput placeholder="Verify" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.Text}>Already have account ?</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button title={"Sign Up"} onPress={LoginScreen}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffca7a",
    alignItems: "center",
  },
  LogoContainer: {
    marginTop: 120,
    width: 160,
    height: 160,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },
  Logo: {
    width: 130,
    height: 130,
  },
  bodyContainer: {
    position: "absolute",
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: 200,
    paddingTop: 100,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingHorizontal: 50,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
  },
  buttonText: {
    color: "#FF9736",
    fontSize: 16,
    fontWeight: "bold",
  },
  Text: {
    color: "black",
    fontSize: 16,
  },
});

export default RegisterScreen;
