import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";

import MapView from "react-native-maps";
import { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

function WeatherMap(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mapData, setMapData] = useState([]);

    const Title =
        "https://tile.openweathermap.org/map/{precipitation_new}/{3}/{2}/{4}.png?appid=7613dff2af161bb376b90a08f6c9d4df";

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== "granted") {
    //             setErrorMsg("Permission to access location was denied");
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //     })();
    // }, []);

    // console.log("location", location);

    // let text = "Waiting..";
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }

    return (
        <SafeAreaView style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: 40.71,
                    longitude: -74.0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                maximumZ={6}
                zIndex={1}
                tileSize={256}
                UrlTile="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=7613dff2af161bb376b90a08f6c9d4df"
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
            >
                <Marker
                    coordinate={{
                        latitude: 40.71,
                        longitude: -74.0,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
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
