import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

interface Props {
  //   image: any;
  name: String;
  description: String;
  price: Number;
}

const ProductCard = (Props: any) => {
  return (
    <View style={styles.Container}>
      {/* <Image source={require(`${Props.image}`)} style={styles.Image} /> */}
      <Text>{Props.name}</Text>
      <Text>{Props.description}</Text>
      <Text>{Props.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFDEAD",
    height: 200,
    width: 130,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  Image: {},
});
