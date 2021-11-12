import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";

import axios from "axios";
import moment from "moment";

import styles from "../assets/style/WeeklyStyles";

function WeeklyForecast() {
    const [dataImg, setDataImg] = useState([]);
    const [fiveDayData, setFiveDayData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.openweathermap.org/data/2.5/onecall?lat=47.75&lon=-120.74&units=imperial&exclude=hourly,minutely&appid=a114b290305980fc2cef5dea978d1021"
            )
            .then((res) => {
                setFiveDayData(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return fiveDayData.length === 0 ? (
        <SafeAreaView>
            <Text>loading...</Text>
        </SafeAreaView>
    ) : (
        <View style={styles.bottomContent}>
            {fiveDayData.daily.map((dates, i) => {
                return (
                    <View style={styles.weeklyCast}>
                        {dates.pop > 0 ? (
                            <>
                                <View style={styles.day}>
                                    <Text style={styles.dayText}>{moment(dates.dt * 1000).format("dddd")}</Text>
                                </View>
                                <View
                                    style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}
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
                                        marginLeft: 99,
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

                                <Image
                                    source={{
                                        uri: "http://openweathermap.org/img/wn/" + dates.weather[0].icon + "@4x.png",
                                    }}
                                    style={styles.image}
                                />

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        marginLeft: 99,
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
