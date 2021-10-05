import React from "react";
import { ScrollView, View, Text } from "react-native";

import styles from "../assets/style/myStyles";
import Partly from "../assets/images/partly.svg";

const data = {
    currentTemp: 88,
    hiTemp: 92,
    lowTemp: 66,
    currentCondition: "Partly Cloudy",
    currentCity: "Phoenix",
    currentState: "AZ",
    currentWind: 12,
    precipitation: "12%",
    hourlyForecast: [
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
    weeklyForecast: [
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
            hiTemp: 100,
            lowTemp: 62,
        },
    ],
};

function WeeklyForecast() {
    return (
        <View style={styles.bottomContent}>
            {data.weeklyForecast.map((res) => {
                console.log(res.hiTemp === 90);
                return (
                    <View style={styles.weeklyCast}>
                        <View style={styles.day}>
                            <Text style={styles.dayText}>{res.day}</Text>
                        </View>
                        <Partly width={30} height={30} />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                marginLeft: 100,
                            }}
                        >
                            <Text style={styles.lowTemp}>{res.lowTemp}</Text>
                            <Text style={{ color: "white", fontSize: 20 }}> | </Text>
                            <Text style={styles.hiTemp}>{res.hiTemp}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

export default WeeklyForecast;
