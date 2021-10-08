import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import axios from "axios";

import styles from "../assets/style/myStyles";
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

export default function HourlyForecast() {
    const [weatherData, setWeatherData] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://api.weatherapi.com/v1/forecast.json?key=5485e3a637e741aab5b24431210810&q=Phoenix&days=5&aqi=no&alerts=no"
            )
            .then((res) => {
                setLoaded(false);
                setWeatherData(res.data);
                // console.log(weatherData.forecast.forecastday[0].hour);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // var time = new Date(
    //     weatherData.forecast.forecastday[0].hour.map((newTime) => {
    //         newTime.time_epoch * 1000;
    //     })
    // );
    // var hours = time.getHours();
    // console.log(hours);

    // Will display time in 10:30:23 format

    // const loopDate = weatherData.forecast.forecastday[0].hour.map((res) => {
    //     return res.time_epoch;
    // });

    if (!weatherData) {
        return (
            <SafeAreaView>
                <Text>loading...</Text>
            </SafeAreaView>
        );
    } else {
        return (
            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                showsHorizontalScrollIndicator={false}
            >
                {weatherData.forecast.forecastday[0].hour.map((res) => {
                    return (
                        <View key={res.id} style={styles.middleContent}>
                            <Partly width={30} height={30} />
                            <Text style={styles.temp}>{Math.round(res.temp_f)}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}
