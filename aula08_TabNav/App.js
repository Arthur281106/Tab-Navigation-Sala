import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "./src/Telas/Home";
import Portfolio from "./src/Telas/Portfolio";
import Contato from "./src/Telas/Contato";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#777",

          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Portfolio") {
              iconName = "work";
            } else if (route.name === "Contato") {
              iconName = "mail";
            }

            return (
              <MaterialIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}