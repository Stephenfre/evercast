import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./app/store/reducer";

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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default function App() {
    return (
        <Provider store={store}>
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
                    {/* <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: () => <Ionicons name="ios-settings-sharp" color="black" size={30} />,
                    }}
                /> */}
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
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
