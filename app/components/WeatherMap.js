import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";

import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

function WeatherMap(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    console.log("location", location);

    const myLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <SafeAreaView style={styles.container}>
            <MapView initialRegion={myLocation} provider={MapView.PROVIDER_GOOGLE} style={styles.map}>
                <Marker coordinate={myLocation} />
            </MapView>
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
