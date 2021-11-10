import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";

import axios from "axios";
import moment from "moment";

import styles from "../assets/style/myStyles";
import Partly from "../assets/images/partly.svg";

function WeeklyForecast() {
    // const [weatherData, setWeatherData] = useState([]);
    const [fiveDayData, setFiveDayData] = useState([]);

    const fiveDay = (weatherData) => {
        for (let i = 4; i < weatherData.length; i += 8) {
            let tempWeather = {
                date: weatherData[i].dt_txt,
                temp_max: weatherData[i].main.temp_max,
                temp_min: weatherData[i].main.temp_min,
                weather: weatherData[i].weather[0].main,
                id: weatherData[i].weather[0].id,
            };

            setFiveDayData((fiveDayData) => [...fiveDayData, tempWeather]);
            // console.log("inside function", fiveDayData);
        }
    };

    useEffect(() => {
        axios
            .get(
                "http://api.openweathermap.org/data/2.5/forecast?id=524901&units=imperial&appid=33ba408e617a0d7ec8ae29ea3ad06559"
            )
            .then((res) => {
                // console.log("DATA DATA DATA ", res.data.list[0].main.temp);
                fiveDay(res.data.list);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // console.log("five date", fiveDayData);

    if (fiveDayData.length === 0) {
        return (
            <SafeAreaView>
                <Text>loading...</Text>
            </SafeAreaView>
        );
    } else {
        return (
            <View style={styles.bottomContent}>
                {fiveDayData.map((dates) => {
                    return (
                        <View style={styles.weeklyCast}>
                            <View style={styles.day}>
                                <Text style={styles.dayText}>{moment(dates.date).format("dddd")}</Text>
                            </View>
                            <Partly width={30} height={30} />
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    marginLeft: 99,
                                }}
                            >
                                <Text style={styles.lowTemp}>{dates.temp_min}</Text>
                                <Text style={{ color: "white", fontSize: 20 }}> | </Text>
                                <Text style={styles.hiTemp}>{Math.round(dates.temp_max)}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}

export default WeeklyForecast;
