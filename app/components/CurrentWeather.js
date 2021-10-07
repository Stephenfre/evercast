import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Button, Dimensions, ScrollView } from "react-native";
import axios from "axios";

import { LineChart } from "react-native-chart-kit";
import styles from "../assets/style/myStyles";

import Partly from "../assets/images/partly.svg";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const screenWidth = Dimensions.get("window").width;

const data = {
    currentTemp: 88,
    hiTemp: 92,
    lowTemp: 66,
    currentCondition: "Partly Cloudy",
    currentCity: "Phoenix",
    currentState: "AZ",
    currentWind: 12,
    precipitation: "12%",
    raining: "yes",
    snowing: "no",
    datasets: [
        {
            data: [1, 5, 10],
            color: (opacity = 1) => `rgba(119, 190, 255, ${opacity})`, // optional
            strokeWidth: 3, // optional
        },
    ],
    snowing: "no",
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

const chartConfig = {
    backgroundGradientFrom: "#CEB68C",
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: "#CEB68C",
    backgroundGradientToOpacity: 0.2,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForDots: {
        r: "0",
    },
    fillShadowGradient: "#77BEFF",
    fillShadowGradientOpacity: 2,
};

function CurrentWeather() {
    const [newdata, setData] = useState([]);

    useEffect(() => {});

    return (
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={["rgb(255,184,0)", "transparent"]}
                    style={styles.background}
                />
                <SafeAreaView style={styles.topContainer}>
                    <View style={styles.opacityTopBackground}></View>
                    <View style={styles.topContent}>
                        <View style={styles.rightColumn}>
                            <Text style={styles.cityText}>{data.currentCity}</Text>
                            <Text style={styles.rigthTempText}>{data.currentTemp}</Text>
                            <View style={styles.condition}>
                                <Button
                                    onPress={() => console.log("you clicked me")}
                                    color="white"
                                    title={data.currentCondition}
                                />
                            </View>
                            <Text style={styles.hiloTemp}>
                                H:{data.hiTemp} L:{data.lowTemp}
                            </Text>
                        </View>
                        <View style={{ marginBottom: 35, marginLeft: 10 }}>
                            <Partly width={200} height={200} />
                        </View>
                    </View>
                </SafeAreaView>
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
                        <Text style={styles.details}>{data.precipitation}</Text>
                    </View>
                    <View
                        style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", paddingLeft: 5 }}
                    >
                        <MaterialCommunityIcons name="weather-windy-variant" color="white" size={14} />
                        <Text style={styles.details}>{data.currentWind} kh/m</Text>
                    </View>
                </View>
                {data.raining === "yes" ? (
                    <View style={styles.raining}>
                        <LineChart
                            data={data}
                            width={screenWidth - 20}
                            height={70}
                            verticalLabelRotation={10}
                            chartConfig={chartConfig}
                            style={{ borderRadius: 10 }}
                            bezier
                        />
                    </View>
                ) : null}
                {data.snowing === "yes" ? (
                    <View style={styles.raining}>
                        <LineChart
                            data={data}
                            width={screenWidth - 20}
                            height={70}
                            verticalLabelRotation={10}
                            chartConfig={chartConfig}
                            style={{ borderRadius: 10 }}
                            bezier
                        />
                    </View>
                ) : null}
                <View style={styles.middleContainer}>
                    <View style={styles.opacityMiddleBackground}></View>
                    <View style={{ width: "95%", height: "100%" }}>
                        <HourlyForecast />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.opacityBottomBackground}></View>
                    <WeeklyForecast />
                </View>
            </View>
        </ScrollView>
    );
}

export default CurrentWeather;
