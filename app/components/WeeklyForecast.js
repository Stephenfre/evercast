import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";

import axios from "axios";
import moment from "moment";

import styles from "../assets/style/WeeklyStyles";

function WeeklyForecast({ weatherData }) {
    return weatherData.length === 0 ? (
        <SafeAreaView>
            <Text>loading...</Text>
        </SafeAreaView>
    ) : (
        <View style={styles.bottomContent}>
            {weatherData.daily.map((dates, i) => {
                return (
                    <View style={styles.weeklyCast}>
                        {dates.pop > 0 ? (
                            <>
                                <View style={styles.day}>
                                    <Text style={styles.dayText}>{moment(dates.dt * 1000).format("dddd")}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginLeft: 5,
                                        marginRight: 10,
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri:
                                                "http://openweathermap.org/img/wn/" + dates.weather[0].icon + "@4x.png",
                                        }}
                                        style={styles.rainImage}
                                    />
                                    <Text style={styles.rainPerc}>{Math.round(dates.pop * 100)}%</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        marginLeft: 55,
                                    }}
                                >
                                    <Text style={styles.lowTemp}>{Math.round(dates.temp.min)}</Text>
                                    <Text style={{ color: "white", fontSize: 20 }}> | </Text>
                                    <Text style={styles.hiTemp}>{Math.round(dates.temp.max)}</Text>
                                </View>
                            </>
                        ) : (
                            <>
                                <View style={styles.day}>
                                    <Text style={styles.dayText}>{moment(dates.dt * 1000).format("dddd")}</Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginRight: 10,
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri:
                                                "http://openweathermap.org/img/wn/" + dates.weather[0].icon + "@4x.png",
                                        }}
                                        style={styles.image}
                                    />
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        marginLeft: 50,
                                    }}
                                >
                                    <Text style={styles.lowTemp}>{Math.round(dates.temp.min)}</Text>
                                    <Text style={{ color: "white", fontSize: 20 }}> | </Text>
                                    <Text style={styles.hiTemp}>{Math.round(dates.temp.max)}</Text>
                                </View>
                            </>
                        )}
                    </View>
                );
            })}
        </View>
    );
}

export default WeeklyForecast;
