import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, Dimensions } from "react-native";

import Partly from "../assets/images/partly.svg";
import styles from "../assets/style/CurrentWeatherStyles";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HourlyForcast from "./HourlyForcast";

const data = {
    currentTemp: 88,
    hiTemp: 92,
    lowTemp: 66,
    currentCondition: "Partly Cloudy",
    currentCity: "Phoenix",
    currentState: "AZ",
    currentWind: 12,
    precipitation: "12%",
    hourlyForcast: [
        {
            id: 1,
            time: "7am",
            condition: "partly cloudy",
            temp: 74,
        },
        {
            id: 2,
            time: "8am",
            condition: "partly cloudy",
            temp: 79,
        },
        {
            id: 3,
            time: "9am",
            condition: "partly cloudy",
            temp: 83,
        },
        {
            id: 4,
            time: "10am",
            condition: "partly cloudy",
            temp: 86,
        },
        {
            id: 5,
            time: "11am",
            condition: "partly cloudy",
            temp: 88,
        },
        {
            id: 6,
            time: "12pm",
            condition: "partly cloudy",
            temp: 91,
        },
        {
            id: 7,
            time: "1pm",
            condition: "partly cloudy",
            temp: 94,
        },
        {
            id: 8,
            time: "2pm",
            condition: "partly cloudy",
            temp: 96,
        },
    ],
    weeklyForcast: [
        {
            id: 1,
            day: "Monday",
            hiTemp: 85,
            lowTemp: 68,
        },
        {
            id: 2,
            day: "Tuesday",
            hiTemp: 90,
            lowTemp: 70,
        },
        {
            id: 3,
            day: "Wednesday",
            hiTemp: 87,
            lowTemp: 68,
        },
        {
            id: 4,
            day: "Thursday",
            hiTemp: 79,
            lowTemp: 65,
        },
        {
            id: 5,
            day: "Friday",
            hiTemp: 80,
            lowTemp: 66,
        },
        {
            id: 6,
            day: "Saturday",
            hiTemp: 75,
            lowTemp: 62,
        },
    ],
};

const { width } = Dimensions.get("window");

function CurrentWeather() {
    // const scrollView = scrollView;

    // useEffect(() => {
    //     setTimeout(() => {
    //         scrollView.scrollTo({ x: -30 });
    //     }, 1); // scroll view position fix
    // });

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["rgb(255,184,0)", "transparent"]}
                style={styles.background}
            />
            <SafeAreaView style={styles.topContainer}>
                <View style={styles.topContent}>
                    <View style={styles.rightColumn}>
                        <Text style={styles.cityText}>{data.currentCity}</Text>
                        <Text style={styles.rigthTempText}>{data.currentTemp}</Text>
                        <View style={styles.condition}>
                            <Text style={styles.conditionText}>{data.currentCondition}</Text>
                        </View>
                        <Text style={styles.hiloTemp}>
                            H:{data.hiTemp} L:{data.lowTemp}
                        </Text>
                    </View>
                    <View style={{ marginBottom: 35, marginLeft: 10 }}>
                        {/* <Image style={styles.Image} source={require("../assets/images/partly-white.png")} /> */}
                        <Partly width={200} height={200} />
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.currentDetails}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", paddingRight: 5 }}>
                    <Ionicons name="ios-rainy" color="white" size={14} />
                    <Text style={styles.details}>{data.precipitation}</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", paddingLeft: 5 }}>
                    <MaterialCommunityIcons name="weather-windy-variant" color="white" size={14} />
                    <Text style={styles.details}>{data.currentWind} kh/m</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <HourlyForcast />
            </View>
            {/* <View style={styles.bottomContent}>
                <Text>Bottom</Text>
            </View> */}
        </View>
    );
}

export default CurrentWeather;
