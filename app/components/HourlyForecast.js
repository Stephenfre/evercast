import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Dimensions, Text, Image } from "react-native";

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
                "https://api.openweathermap.org/data/2.5/onecall?lat=33.50&lon=-112.04&units=imperial&exclude=daily,minutely&appid=33ba408e617a0d7ec8ae29ea3ad06559"
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
            {weatherData.hourly.map((hour) => {
                return (
                    <View style={styles.middleContent}>
                        <Text style={styles.time}>
                            {moment(hour.dt * 1000)
                                .format("ha")
                                .toUpperCase()}
                        </Text>
                        <Image
                            source={{ uri: "http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@4x.png" }}
                            style={styles.image}
                        />
                        <Text style={styles.temp}>{Math.round(hour.temp)}°</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}
