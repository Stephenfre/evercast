import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator, Image } from "react-native";

function SplashScreen() {
    return (
        <View style={styles.splashContainer}>
            <StatusBar style="light" />
            <Image style={styles.logo} source={require("../assets/images/partly.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        // flex: 1,
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
});

export default SplashScreen;
