import React from "react";
import { StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import SplashScreen from "./app/screens/SplashScreen";
import CurrentWeather from "./app/components/CurrentWeather";
import WeatherMap from "./app/components/WeatherMap";
import Settings from "./app/components/Settings";
import MyLocations from "./app/components/MyLocations";

const { height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: "white" },
                    tabBarBackground: () => <BlurView tint="dark" intensity={100} />,
                    headerShown: false,
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    options={{
                        tabBarIcon: () => <Ionicons name="ios-home-sharp" color="black" size={30} />,
                    }}
                    component={CurrentWeather}
                />
                <Tab.Screen
                    name="Map"
                    options={{
                        tabBarIcon: () => <Ionicons name="ios-map" color="black" size={30} />,
                    }}
                    component={WeatherMap}
                />
                <Tab.Screen
                    name="Location"
                    component={MyLocations}
                    options={{
                        tabBarIcon: () => <Ionicons name="heart" color="black" size={30} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        height: height,
        borderWidth: 1,
        borderColor: "red",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
