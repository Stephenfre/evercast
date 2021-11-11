import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Dimensions, Text } from "react-native";

import axios from "axios";
import moment from "moment";

import styles from "../assets/style/HourlyForcast";
import Partly from "../assets/images/partly.svg";

const { width } = Dimensions.get("window");

export default function HourlyForecast() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.weatherapi.com/v1/forecast.json?key=5485e3a637e741aab5b24431210810&q=Phoenix&days=1&aqi=no&alerts=no"
            )
            .then((res) => {
                setWeatherData(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return weatherData.length === 0 ? (
        <SafeAreaView>
            <Text>loading...</Text>
        </SafeAreaView>
    ) : (
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
                        <Text style={styles.time}>{moment(res.time).format("ha").toUpperCase()}</Text>
                        <Partly width={30} height={30} />
                        <Text style={styles.temp}>{Math.round(res.temp_f)}°</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}
