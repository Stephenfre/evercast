import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Button, Dimensions, ScrollView, Image } from "react-native";
import axios from "axios";

import { LineChart } from "react-native-chart-kit";
import styles from "../assets/style/myStyles";

import Partly from "../assets/images/partly.svg";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#CEB68C",
    backgroundGradientFromOpacity: 0.2,
    backgroundGradientTo: "#CEB68C",
    backgroundGradientToOpacity: 0.2,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForDots: {
        r: "0",
    },
    fillShadowGradient: "#77BEFF",
    fillShadowGradientOpacity: 2,
};

function CurrentWeather() {
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
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(weatherData === undefined);
    if (weatherData === undefined) {
        return (
            <SafeAreaView>
                <Text>loading...</Text>
            </SafeAreaView>
        );
    } else {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgb(255,184,0)", "transparent"]}
                        style={styles.background}
                    />
                    <SafeAreaView style={styles.topContainer}>
                        <View style={styles.opacityTopBackground}></View>
                        <View style={styles.topContent}>
                            <View style={styles.rightColumn}>
                                <Text style={styles.cityText}>Phoenix</Text>
                                <Text style={styles.rigthTempText}>{Math.round(weatherData.current.temp_f)}</Text>
                                <View style={styles.condition}>
                                    <Text style={styles.conditionText}>{weatherData.current.condition.text}</Text>
                                </View>
                                <Text style={styles.hiloTemp}>
                                    H: {Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)} L:
                                    {Math.round(weatherData.forecast.forecastday[0].day.mintemp_f)}
                                </Text>
                            </View>
                            <View style={{ marginBottom: 35, marginLeft: 10 }}>
                                <Partly style={{ width: 200, height: 200 }} />
                            </View>
                        </View>
                    </SafeAreaView>
                    <View style={styles.currentDetails}>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                paddingRight: 5,
                            }}
                        >
                            <Ionicons name="ios-rainy" color="white" size={15} />
                            {weatherData.forecast.forecastday[0].day.daily_chance_of_rain === 0 ? (
                                <Text style={styles.details}>
                                    {" "}
                                    {weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %
                                </Text>
                            ) : (
                                <Text style={styles.details}> 0 %</Text>
                            )}
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                paddingLeft: 5,
                            }}
                        >
                            <MaterialCommunityIcons name="weather-windy-variant" color="white" size={14} />
                            <Text style={styles.details}>
                                {weatherData.forecast.forecastday[0].day.maxwind_kph} kh/m
                            </Text>
                        </View>
                    </View>
                    {weatherData.forecast.forecastday[0].daydaily_chance_of_rain === 0 ? (
                        <View style={styles.raining}>
                            <LineChart
                                data={data}
                                width={screenWidth - 20}
                                height={70}
                                verticalLabelRotation={10}
                                chartConfig={chartConfig}
                                style={{ borderRadius: 10 }}
                                bezier
                            />
                        </View>
                    ) : null}
                    <View style={styles.middleContainer}>
                        <View style={styles.opacityMiddleBackground}></View>
                        <View style={{ width: "95%", height: "100%" }}>{/* <HourlyForecast /> */}</View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.opacityBottomBackground}></View>
                        {/* <WeeklyForecast /> */}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default CurrentWeather;
