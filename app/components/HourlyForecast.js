import React from "react";
import { View, SafeAreaView, ScrollView, Text, Image } from "react-native";

import moment from "moment";

import styles from "../assets/style/HourlyStyles";

export default function HourlyForecast({ weatherData }) {
    const now = moment().format("ha");
    // console.log("now", now);

    return weatherData.length === 0 ? (
        <SafeAreaView>
            <Text>loading...</Text>
        </SafeAreaView>
    ) : (
        <ScrollView horizontal={true} decelerationRate={0} showsHorizontalScrollIndicator={false}>
            {weatherData.hourly.map((hour, index) => {
                // console.log("hourly", moment(hour.dt * 1000).format("ha") === now);
                // console.log("hourly", moment(hour.dt * 1000).format("ha") === moment().format("h"));
                // console.log("hourly", moment().format("ha"));
                return (
                    <View key={index} style={styles.middleContent}>
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
