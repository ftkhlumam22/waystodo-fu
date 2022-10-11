import React from "react";

// Import page
import Welcomepage from "./src/view/Welcomepage";
import Loginform from "./src/view/Loginform";
import Registerform from "./src/view/Registerform";
import DetailCard from "./src/view/DetailCard";
import AddCategory from "./src/view/AddCategory";
import AddList from "./src/view/AddList";
import Homepage from "./src/view/Homepage";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

import "./global";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function ButtonTab() {
  // Init Theme
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Homepage"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Homepage") {
            iconName = focused ? "notebook" : "notebook-outline";
          } else if (route.name === "AddList") {
            iconName = focused ? "card-plus" : "card-plus-outline";
          } else if (route.name === "AddCategory") {
            iconName = focused ? "bookmark-plus" : "bookmark-plus-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="AddList" component={AddList} />
      <Tab.Screen name="AddCategory" component={AddCategory} />
    </Tab.Navigator>
  );
}

const Routes = (props) => {
  console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          initialParams={props}
          component={Welcomepage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Loginform}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Registerform}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={ButtonTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailCard"
          component={DetailCard}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
