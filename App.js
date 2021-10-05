import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import CurrentWeather from "./app/components/CurrentWeather";
import SplashScreen from "./app/screens/SplashScreen";

const { height } = Dimensions.get("window");

export default function App() {
    return (
        <ScrollView>
            {/* <StatusBar style={{ color: "white" }} /> */}
            {/* <SplashScreen /> */}
            <CurrentWeather />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: height,
        // alignItems: "center",
        // justifyContent: "center",
    },
});
