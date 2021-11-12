import React, { useState, useEffect } from "react";
import axios from "axios";

import { View, Text } from "react-native";

import styles from "../assets/style/CurrentWeather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ionicons from "react-native-vector-icons/Ionicons";

function RainWind() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.weatherapi.com/v1/forecast.json?key=5485e3a637e741aab5b24431210810&q=47.75,-120.74&days=1&aqi=no&alerts=yes"
            )
            .then((res) => {
                setData(res.data);
                // console.log("data", res.data);
            })
            .catch((err) => {
                console.log(err, "something went wrong");
            });
    }, []);

    return data.length === 0 ? (
        <View>
            <Text>loading...</Text>
        </View>
    ) : (
        <View style={styles.currentDetails}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: 5,
                }}
            >
                <Ionicons name="ios-rainy" color="white" size={15} />
                <Text style={styles.details}>{data.forecast.forecastday[0].day.daily_chance_of_rain} %</Text>
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingLeft: 5,
                }}
            >
                <MaterialCommunityIcons name="weather-windy-variant" color="white" size={14} />
                <Text style={styles.details}>{Math.round(data.forecast.forecastday[0].day.maxwind_kph)} kh/m</Text>
            </View>
        </View>
    );
}

export default RainWind;
