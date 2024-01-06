import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      // image: "../assets/images/espressoIcon.png",
      name: "Espresso",
      description: "description",
      price: 5.99,
    },
    {
      id: 2,
      // image: "../assets/images/espressoIcon.png",
      name: "Espresso",
      description: "description",
      price: 5.99,
    },
    {
      id: 3,
      // image: "../assets/images/espressoIcon.png",
      name: "Espresso",
      description: "description",
      price: 5.99,
    },
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <View style={styles.setting}>
          <Ionicons style={styles.icon} name="search" size={24} color="white" />
        </View>
        <View style={styles.userBC}>
          <View>
            <Text style={styles.textUser}>Name</Text>
            <Text style={styles.textUser}>123, District 1</Text>
          </View>

          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.imageUser}
          />
        </View>
      </View>

      <View>
        <Text style={styles.textTitle}>Special Deal</Text>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.item}>
            {data.map((item, key) => {
              return <ProductCard key={key} data={item} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  item: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 40,
  },
  setting: {
    width: 50,
    height: 50,
    marginLeft: 25,
    backgroundColor: "#49464C",
    borderRadius: 25,
  },
  icon: {
    margin: 12,
  },
  userBC: {
    width: 270,
    height: 100,
    backgroundColor: "#FFDEAD",
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  textUser: {
    textAlign: "right",
    marginLeft: 70,
  },
  imageUser: {
    width: 100,
    height: 100,
  },
  textTitle: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 18,
  },
});

export default HomeScreen;
