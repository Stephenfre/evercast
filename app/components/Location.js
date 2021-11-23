import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";

function Location(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.reverseGeoCodeAsync({ lat, lng });
            setLocation(location);

            console.log("location");
        })();
    }, []);

    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    console.log(text);

    return <View></View>;
}

export default Location;
