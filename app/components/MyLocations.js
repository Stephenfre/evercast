import React, { useState } from "react";
import { Text, View, TextInput, SafeAreaView, StatusBar, ScrollView } from "react-native";

import styles from "../assets/style/MyLocations";
import Partly from "../assets/images/partly.svg";

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
    precipitation: "60%",
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

    savedLocations: [
        {
            id: 1,
            temp: 88,
            city: "Phoenix",
            country: "USA",
            wind: 12,
            precip: "60%",
        },

        {
            id: 2,
            temp: 66,
            city: "New York",
            country: "USA",
            wind: 20,
            precip: "60%",
        },
    ],
};

function SavedLocations(props) {
    const [text, setText] = useState("");

    return (
        <ScrollView>
            <View style={styles.savedContainer}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Text style={styles.header}> My Locations </Text>
                    <TextInput style={styles.input} onChangeText={setText} value={text} placeholder="Placeholder" />
                </SafeAreaView>
                <View style={styles.locations}>
                    {data.savedLocations.map((res) => {
                        return (
                            <View key={res.id}>
                                <View style={res.temp > 66 ? styles.locationCardA : styles.locationCardB}>
                                    {res.temp > 66 ? (
                                        <LinearGradient
                                            start={{ x: 1, y: 0 }}
                                            end={{ x: 0, y: 1 }}
                                            colors={["rgb(255,184,0)", "transparent"]}
                                            style={styles.cardBackground}
                                        />
                                    ) : (
                                        <LinearGradient
                                            start={{ x: 1, y: 0 }}
                                            end={{ x: 0, y: 1 }}
                                            colors={["rgb(162,216,247)", "transparent"]}
                                            style={styles.cardBackground}
                                        />
                                    )}

                                    <View style={styles.topCard}>
                                        <View style={styles.savedCity}>
                                            <Text style={styles.locationTemp}>{res.temp}</Text>
                                            <Text style={styles.locationCity}>{res.city}</Text>
                                            <Text style={styles.locationCountry}>{res.country}</Text>
                                        </View>

                                        <View>
                                            <Partly width={50} height={50} />
                                        </View>
                                    </View>
                                    <View style={styles.locationDetails}>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                paddingRight: 5,
                                            }}
                                        >
                                            <Ionicons name="ios-rainy" color="white" size={13} />
                                            <Text style={styles.savedDetails}>{res.precip}</Text>
                                        </View>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                paddingLeft: 5,
                                            }}
                                        >
                                            <MaterialCommunityIcons
                                                name="weather-windy-variant"
                                                color="white"
                                                size={13}
                                            />
                                            <Text style={styles.savedDetails}>{res.wind} kh/m</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

export default SavedLocations;
