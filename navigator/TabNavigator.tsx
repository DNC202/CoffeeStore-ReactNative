import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import HomeScreen from "../screens/HomeScreen";

import CartScreen from "../screens/CartScreen";
import HistoryScreen from "../screens/HistoryScreen";
import { Ionicons } from "@expo/vector-icons";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //   <BlurView
        //     overlayColor=""
        //     blurAmount={15}
        //     style={styles.BlurViewStyles}
        //   />
        // ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="home"
              size={30}
              color={focused ? "#22092C" : "#B6BBC4"}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="cart"
              size={30}
              color={focused ? "#22092C" : "#B6BBC4"}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="History"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="reorder-four"
              size={30}
              color={focused ? "#22092C" : "#B6BBC4"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="settings"
              size={30}
              color={focused ? "#22092C" : "#B6BBC4"}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: "absolute",
    backgroundColor: "#FFCA7A",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
