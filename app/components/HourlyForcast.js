import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";

import styles from "../assets/style/CurrentWeatherStyles";
import Partly from "../assets/images/partly.svg";

const { width } = Dimensions.get("window");
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

export default function HourlyForcast() {
    // componentDidMount() {
    // 	setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    // }

    return (
        <ScrollView
            // ref={(scrollView) => { this.scrollView = scrollView; }}
            pagingEnabled={true}
            horizontal={true}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
            }}
        >
            {data.hourlyForcast.map((res) => {
                return (
                    <View style={styles.middleContent}>
                        <Text style={styles.time}>{res.time}</Text>
                        <Partly width={30} height={30} />
                        <Text style={styles.temp}>{res.temp}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}
