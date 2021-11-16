import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Pressable, Dimensions, ScrollView, Modal, Image } from "react-native";
import { getWeatherData } from "../store/actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { LineChart } from "react-native-chart-kit";
import styles from "../assets/style/CurrentStyles";
import HourlyStyles from "../assets/style/HourlyStyles";
import WeeklyStyles from "../assets/style/WeeklyStyles";
import backgroundStyles from "../assets/style/BackgroundColors";

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

function CurrentWeather({ weatherData }) {
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeatherData());
    }, []);

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
                        : morning && weatherData.current.weather[0].main === "Clear"
                        ? backgroundStyles.morningContainer
                        : morning && weatherData.current.weather[0].main === "Overcast"
                        ? backgroundStyles.morningContainerOvercast
                        : morning && weatherData.current.weather[0].main === "Rain"
                        ? backgroundStyles.morningContainerRain
                        : morning && weatherData.current.weather[0].main === "Snow"
                        ? backgroundStyles.morningContainerSnow
                        : afternoon && weatherData.current.weather[0].main === "Clear"
                        ? backgroundStyles.afternoonContainer
                        : afternoon && weatherData.current.weather[0].main === "Clouds"
                        ? backgroundStyles.afternoonContainerOvercast
                        : afternoon && weatherData.current.weather[0].main === "Rain"
                        ? backgroundStyles.afternoonContainerRain
                        : afternoon && weatherData.current.weather[0].main === "Snow"
                        ? backgroundStyles.afternoonContainerSnow
                        : evening && weatherData.current.weather[0].main === "Sunny"
                        ? backgroundStyles.eveningContainer
                        : evening && weatherData.current.weather[0].main === "Clouds"
                        ? backgroundStyles.eveningContainerOvercast
                        : evening && weatherData.current.weather[0].main === "Rain"
                        ? backgroundStyles.eveningContainerRain
                        : evening && weatherData.current.weather[0].main === "Snow"
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
                ) : morning && weatherData.current.weather[0].main === "Clear" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(255,184,0,100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.weather[0].main === "Overcast" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(219, 226, 251, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.weather[0].main === "Rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(204, 215, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : morning && weatherData.current.weather[0].main === "Snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(63, 174, 255, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.weather[0].main === "Clear" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(255, 184, 0, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.weather[0].main === "Overcast" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(168, 175, 198, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.weather[0].main === "Rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(136, 149, 195, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : afternoon && weatherData.current.weather[0].main === "Snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(0, 50, 86, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.weather[0].main === "Sunny" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgb(202, 145, 0)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.weather[0].main === "Clouds" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(120, 124, 140, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.weather[0].main === "Rain" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(99, 109, 146, 100)", "transparent"]}
                        style={backgroundStyles.background}
                    />
                ) : evening && weatherData.current.weather[0].main === "Snow" ? (
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["rgba(0, 24, 41, 100)", "transparent"]}
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
                            <Text style={styles.cityText}>Phoenix</Text>
                            <Text style={styles.rigthTempText}>{Math.round(weatherData.current.temp)}°</Text>
                            <>
                                {weatherData.current.weather[0].main === "Rain" ? (
                                    <>
                                        <View style={styles.conditionRain}>
                                            <Text style={styles.conditionText}>
                                                {weatherData.current.weather[0].main}
                                            </Text>
                                        </View>
                                    </>
                                ) : (
                                    <>
                                        <View style={styles.condition}>
                                            <Text style={styles.conditionText}>
                                                {weatherData.current.weather[0].main}
                                            </Text>
                                        </View>
                                    </>
                                )}
                            </>
                            <Text style={styles.hiloTemp}>
                                H: {Math.round(weatherData.daily[0].temp.max)}° L:
                                {Math.round(weatherData.daily[0].temp.min)}°
                            </Text>
                        </View>
                        <View style={{ marginBottom: 35, marginLeft: 10 }}>
                            <Image
                                source={{
                                    uri:
                                        "http://openweathermap.org/img/wn/" +
                                        weatherData.current.weather[0].icon +
                                        "@4x.png",
                                }}
                                style={styles.image}
                            />
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
                        <>
                            {weatherData.daily[0].pop > 0 ? (
                                <Text style={styles.details}>{Math.round(weatherData.daily[0].pop * 100)} %</Text>
                            ) : (
                                <Text style={styles.details}>0% </Text>
                            )}
                        </>
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
                        <Text style={styles.details}>{weatherData.current.wind_speed} kh/m</Text>
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
                {/* {weatherData.forecast.forecastday[0].day.daily_chance_of_rain ||
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
                ) : null} */}
                <View style={HourlyStyles.middleContainer}>
                    <View style={HourlyStyles.opacityMiddleBackground}></View>
                    <HourlyForecast weatherData={weatherData} />
                </View>
                <View style={WeeklyStyles.bottomContainer}>
                    <View style={WeeklyStyles.opacityBottomBackground}></View>
                    <WeeklyForecast weatherData={weatherData} />
                </View>
            </View>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData,
        weatherDataFail: state.weatherDataFail,
    };
};

const mapDispatchToProps = {
    getWeatherData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
