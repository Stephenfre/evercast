import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentWeather from "./app/components/CurrentWeather";
import SplashScreen from "./app/screens/SplashScreen";

export default function App() {
    return (
        <View style={styles.container}>
            {/* <StatusBar style={{ color: "white" }} /> */}
            {/* <SplashScreen /> */}
            <CurrentWeather />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
