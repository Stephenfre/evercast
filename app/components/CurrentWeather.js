import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Pressable, Dimensions, ScrollView, Modal } from "react-native";
import axios from "axios";

import { LineChart } from "react-native-chart-kit";
import styles from "../assets/style/CurrentWeather";
import HourlyStyles from "../assets/style/HourlyForcast";
import WeeklyStyles from "../assets/style/WeeklyForcast";
import backgroundStyles from "../assets/style/BackgoundColors";

import ClearDay from "../assets/images/clear.svg";
import Partly from "../assets/images/partly.svg";
import Cloudy from "../assets/images/cloudy.svg";
import RainLight from "../assets/images/rain.svg";
import Storm from "../assets/images/storm.svg";
import Snow from "../assets/images/snow.svg";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

const screenWidth = Dimensions.get("window").width;

const data = {
    datasets: [
        {
            data: [1, 2],
            color: (opacity = 1) => `rgba(119, 190, 255, ${opacity})`, // optional
            strokeWidth: 3, // optional
        },
    ],
};

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
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios
            .get(
                "https://api.weatherapi.com/v1/forecast.json?key=5485e3a637e741aab5b24431210810&q=Phoenix&days=5&aqi=no&alerts=yes"
            )
            .then((res) => {
                setWeatherData(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // console.log("alert", weatherData.alerts[0]);
    // console.log("alert", weatherData.alerts.length !== undefined);
    var hours = new Date().getHours();

    const earlyMorning = hours <= 6;

    const morning = hours >= 7 && hours < 12;

    const afternoon = hours >= 12 && hours < 15;

    const evening = hours >= 15 && hours < 17;

    const night = hours >= 17 && hours <= 24;

    return weatherData.length === 0 ? (
        <SafeAreaView>
            <Text>loading...</Text>
        </SafeAreaView>
    ) : (
        <ScrollView>
            <View
                // TODO: Change to switch cases
                style={
                    earlyMorning
                        ? backgroundStyles.earlyContainer
                        : morning && weatherData.current.condition.text === "Clear"
                        ? backgroundStyles.morningContainer
                        : morning && weatherData.current.condition.text === "Overcast"
                        ? backgroundStyles.morningContainerOvercast
                        : morning && weatherData.current.condition.text === "Light rain"
                        ? backgroundStyles.morningContainerRain
                        : morning && weatherData.current.condition.text === "Heavy rain"
                        ? backgroundStyles.morningContainerRain
                        : morning && weatherData.current.condition.text === "Light snow"
                        ? backgroundStyles.morningContainerSnow
                        : morning && weatherData.current.condition.text === "Heavy snow"
                        ? backgroundStyles.morningContainerSnow
                        : afternoon && weatherData.current.condition.text === "Clear"
                        ? backgroundStyles.afternoonContainer
                        : afternoon && weatherData.current.condition.text === "Overcast"
                        ? backgroundStyles.afternoonContainerOvercast
                        : afternoon && weatherData.current.condition.text === "Light rain"
                        ? backgroundStyles.afternoonContainerRain
                        : afternoon && weatherData.current.condition.text === "Heavy rain"
                        ? backgroundStyles.afternoonContainerRain
                        : afternoon && weatherData.current.condition.text === "Light snow"
                        ? backgroundStyles.afternoonContainerSnow
                        : afternoon && weatherData.current.condition.text === "Heavy snow"
                        ? backgroundStyles.afternoonContainerSnow
                        : evening && weatherData.current.condition.text === "Clear"
                        ? backgroundStyles.eveningContainer
                        : evening && weatherData.current.condition.text === "Overcast"
                        ? backgroundStyles.eveningContainerOvercast
                        : evening && weatherData.current.condition.text === "Light rain"
                        ? backgroundStyles.eveningContainerRain
                        : evening && weatherData.current.condition.text === "Heavy rain"
                        ? backgroundStyles.eveningContainerRain
                        : evening && weatherData.current.condition.text === "Light snow"
                        ? backgroundStyles.eveningContainerSnow
                        : evening && weatherData.current.condition.text === "Heavy snow"
                        ? backgroundStyles.eveningContainerSnow
                        : night
                        ? backgroundStyles.nightContainer
                        : null
                }
            >
                {earlyMorning ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgb(0, 0, 0)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.condition.text === "Clear" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(255,184,0,100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.condition.text === "Overcast" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(219, 226, 251, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.condition.text === "Light rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(204, 215, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.condition.text === "Heavy rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(204, 215, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weather === "Light snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(63, 174, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weather === "Heavy snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(63, 174, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Clear" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(255, 184, 0, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Overcast" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(168, 175, 198, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Light rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(136, 149, 195, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Heavy rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(136, 149, 195, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Light snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(0, 50, 86, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.condition.text === "Heavy snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(0, 50, 86, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Clear" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgb(202, 145, 0)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Overcast" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(120, 124, 140, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Light rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(99, 109, 146, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Heavy rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(99, 109, 146 ,100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Light snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(0, 24, 41, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.condition.text === "Heavy snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(52, 83, 112, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : night ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgb(0, 0, 0)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : null}

                <SafeAreaView style={styles.topContainer}>
                    <View style={styles.opacityTopBackground}></View>
                    <View style={styles.topContent}>
                        <View style={styles.rightColumn}>
                            <Text style={styles.cityText}>{weatherData.location.name}</Text>
                            <Text style={styles.rigthTempText}>{Math.round(weatherData.current.temp_f)}°</Text>
                            <View style={styles.condition}>
                                <Text style={styles.conditionText}>{weatherData.current.condition.text}</Text>
                            </View>
                            <Text style={styles.hiloTemp}>
                                H: {Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)}° L:
                                {Math.round(weatherData.forecast.forecastday[0].day.mintemp_f)}°
                            </Text>
                        </View>
                        <View style={{ marginBottom: 35, marginLeft: 10 }}>
                            {weatherData.current.condition.text === "Clear" ? (
                                <ClearDay style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Partly cloudy" ? (
                                <Partly style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Overcast" ? (
                                <Cloudy style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Light rain" ? (
                                <RainLight style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Heavy rain" ? (
                                <RainLight style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Light snow" ? (
                                <Snow style={{ width: 200, height: 200 }} />
                            ) : weatherData.current.condition.text === "Heavy snow" ? (
                                <Snow style={{ width: 200, height: 200 }} />
                            ) : null}
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
                        <Text style={styles.details}>
                            {weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %
                        </Text>
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
                        <Text style={styles.details}>{weatherData.forecast.forecastday[0].day.maxwind_kph} kh/m</Text>
                    </View>
                </View>

                {/*Conditonal Alert Div*/}
                {/* {weatherData.alerts.length === undefined ? null : (
                <View style={styles.alert}>
                    <View style={styles.opacityAlertBackground}></View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{weatherData.alerts.alert[1].desc}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable style={styles.alertMessage} onPress={() => setModalVisible(true)}>
                        <Text style={styles.textStyle}> Alert! {weatherData.alerts.alert[1].event}</Text>
                    </Pressable>
                </View>
                )} */}

                {/*Conditonal Rain or Snow Div*/}
                {weatherData.forecast.forecastday[0].day.daily_chance_of_rain ||
                weatherData.forecast.forecastday[0].day.daily_chance_of_snow > 0 ? (
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
                <View style={HourlyStyles.middleContainer}>
                    <View style={HourlyStyles.opacityMiddleBackground}></View>
                    <HourlyForecast />
                </View>
                {/* <View style={WeeklyStyles.bottomContainer}>
                    <View style={WeeklyStyles.opacityBottomBackground}></View>
                    <WeeklyForecast />
                </View> */}
            </View>
        </ScrollView>
    );
}

export default CurrentWeather;
