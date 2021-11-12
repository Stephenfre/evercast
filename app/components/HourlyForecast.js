import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Dimensions, Text, Image } from "react-native";

import axios from "axios";
import moment from "moment";

import styles from "../assets/style/HourlyForcast";
import Partly from "../assets/images/partly.svg";

const { width } = Dimensions.get("window");

export default function HourlyForecast() {
    const [weatherData, setWeatherData] = useState([]);

    const now = moment().format("ha");
    console.log("now", now);

    useEffect(() => {
        axios
            .get(
                "https://api.openweathermap.org/data/2.5/onecall?lat=33.45&lon=-112.07&units=imperial&exclude=daily,minutely&appid=33ba408e617a0d7ec8ae29ea3ad06559"
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
            // snapToInterval={width - 60}
            // snapToAlignment={"center"}
            showsHorizontalScrollIndicator={false}
        >
            {weatherData.hourly.map((hour) => {
                console.log("hourly", moment(hour.dt * 1000).format("ha") === now);
                // console.log("hourly", moment(hour.dt * 1000).format("ha") === moment().format("h"));
                // console.log("hourly", moment().format("ha"));
                return (
                    <View style={styles.middleContent}>
                        {hour.pop > 0 ? (
                            <>
                                <Text style={styles.rainTime}>
                                    {moment(hour.dt * 1000)
                                        .format("ha")
                                        .toUpperCase()}
                                </Text>

                                <Image
                                    source={{
                                        uri: "http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@4x.png",
                                    }}
                                    style={styles.rainImage}
                                />
                                <Text style={styles.rainPerc}>{Math.round(hour.pop * 100)}%</Text>
                                <Text style={styles.rainTemp}>{Math.round(hour.temp)}°</Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.time}>
                                    {moment(hour.dt * 1000)
                                        .format("ha")
                                        .toUpperCase()}
                                </Text>
                                <Image
                                    source={{
                                        uri: "http://openweathermap.org/img/wn/" + hour.weather[0].icon + "@4x.png",
                                    }}
                                    style={styles.image}
                                />
                                <Text style={styles.temp}>{Math.round(hour.temp)}°</Text>
                            </>
                        )}
                    </View>
                );
            })}
        </ScrollView>
    );
}
