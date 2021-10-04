import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, Dimensions } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const data = {
    currentTemp: 88,
    hiTemp: 92,
    lowTemp: 66,
    currentCondition: "Partly Cloudy",
    currentCity: "Phoenix",
    currentState: "AZ",
    currentWind: 12,
    precipitation: "12%",
    hourlyForcast: [
        {
            id: 1,
            time: "7am",
            condition: "partly cloudy",
            temp: 74,
        },
        {
            id: 2,
            time: "8am",
            condition: "partly cloudy",
            temp: 79,
        },
        {
            id: 3,
            time: "9am",
            condition: "partly cloudy",
            temp: 83,
        },
        {
            id: 4,
            time: "10am",
            condition: "partly cloudy",
            temp: 86,
        },
        {
            id: 5,
            time: "11am",
            condition: "partly cloudy",
            temp: 88,
        },
        {
            id: 6,
            time: "12pm",
            condition: "partly cloudy",
            temp: 91,
        },
        {
            id: 7,
            time: "1pm",
            condition: "partly cloudy",
            temp: 94,
        },
        {
            id: 8,
            time: "2pm",
            condition: "partly cloudy",
            temp: 96,
        },
    ],
    weeklyForcast: [
        {
            id: 1,
            day: "Monday",
            hiTemp: 85,
            lowTemp: 68,
        },
        {
            id: 2,
            day: "Tuesday",
            hiTemp: 90,
            lowTemp: 70,
        },
        {
            id: 3,
            day: "Wednesday",
            hiTemp: 87,
            lowTemp: 68,
        },
        {
            id: 4,
            day: "Thursday",
            hiTemp: 79,
            lowTemp: 65,
        },
        {
            id: 5,
            day: "Friday",
            hiTemp: 80,
            lowTemp: 66,
        },
        {
            id: 6,
            day: "Saturday",
            hiTemp: 75,
            lowTemp: 62,
        },
    ],
};
// background: rgb(206,148,0);
// background: linear-gradient(51deg, rgba(206,148,0,1) 0%, rgba(183,0,66,1) 96%);

function CurrentWeather() {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["rgb(255,184,0)", "transparent"]}
                style={styles.background}
            />
            <SafeAreaView style={styles.topContainer}>
                <View style={styles.topContent}>
                    <View style={styles.rightColumn}>
                        <Text style={styles.cityText}>{data.currentCity}</Text>
                        <Text style={styles.rigthTempText}>{data.currentTemp}</Text>
                        <View style={styles.condition}>
                            <Text style={styles.conditionText}>{data.currentCondition}</Text>
                        </View>
                        <Text style={styles.hiloTemp}>
                            H:{data.hiTemp} L:{data.lowTemp}
                        </Text>
                    </View>
                    <View>
                        <Image style={styles.Image} source={require("../assets/images/partly-white.png")} />
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.currentDetails}>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", paddingRight: 5 }}>
                    <Ionicons name="ios-rainy" color="white" size={14} />
                    <Text style={styles.details}>{data.precipitation}</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", paddingLeft: 5 }}>
                    <MaterialCommunityIcons name="weather-windy-variant" color="white" size={14} />
                    <Text style={styles.details}>{data.currentWind} kh/m</Text>
                </View>
            </View>
            <View style={styles.middleContainer}>
                {data.hourlyForcast.map((res) => {
                    return (
                        <View style={styles.middleContent}>
                            <Text>{res.time}</Text>
                            <Text style={{ backgroundColor: "grey", width: 30, height: 30 }}></Text>
                            <Text>{res.temp}</Text>
                        </View>
                    );
                })}
            </View>
            {/* <View style={styles.bottomContent}>
                <Text>Bottom</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(255, 48, 123)",
        // justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    // * TOP CONTAINER

    topContainer: {
        height: 250,
        width: "100%",
        // backgroundColor: "red",
        flexDirection: "column",
        marginTop: 50,
    },

    topContent: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 50,
    },

    rightColumn: {
        height: 200,
        paddingRight: 30,
        paddingLeft: 20,
        paddingBottom: 30,
        alignItems: "center",
    },

    cityText: {
        color: "white",
        fontSize: 24,
        fontFamily: "Helvetica",
        letterSpacing: 2,
    },

    rigthTempText: {
        color: "white",
        fontSize: 88,
    },

    condition: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,

        backgroundColor: "gold",
    },

    conditionText: {
        color: "white",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Helvetica",
        letterSpacing: 1,
    },

    hiloTemp: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Helvetica",
        paddingTop: 5,
    },

    Image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },

    currentDetails: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "60%",
    },

    details: {
        padding: 5,
        color: "white",
        fontSize: 14,
    },

    // * MIDDLE CONTAINER

    middleContainer: {
        height: 100,
        width: "100%",
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    middleContent: {
        alignItems: "center",
        color: "white",
    },

    bottomContent: {
        height: 50,
        width: "100%",
        backgroundColor: "green",
    },
});

export default CurrentWeather;
