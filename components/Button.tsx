import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: "#FBB46C",
    width: 170,
    height: 50,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: "center",
  },

  buttonText: {
    color: "#865F25",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
