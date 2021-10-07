import React from "react";
import { StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";

import MapView from "react-native-maps";

function WeatherMap(props) {
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 33.50271,
                    longitude: -112.0484,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default WeatherMap;
