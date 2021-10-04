import React from "react";
import { StyleSheet, SafeAreaView, Text, View, Image, Dimensions } from "react-native";

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

function CurrentWeather() {
    return (
        <View style={styles.container}>
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
            <View style={styles.middleContent}>
                <Text>Middle</Text>
            </View>
            <View style={styles.bottomContent}>
                <Text>Bottom</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        height: "100%",
        width: "100%",
        backgroundColor: "#FFC700",
        // justifyContent: "center",
        alignItems: "center",
    },
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
    currentDetails: {
        backgroundColor: "darkred",
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
    Image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    middleContent: {
        height: 50,
        width: "100%",
        backgroundColor: "blue",
    },
    bottomContent: {
        height: 50,
        width: "100%",
        backgroundColor: "green",
    },
});

export default CurrentWeather;
