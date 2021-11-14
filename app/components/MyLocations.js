import React, { useState, useEffect } from "react";
import { Text, View, TextInput, SafeAreaView, StatusBar, ScrollView, Pressable, Modal, Alert } from "react-native";

import SearchInput, { createFilter } from "react-native-search-filter";

import styles from "../assets/style/MyLocationsStyles";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NewLocation from "./NewLocation";

const data = {
    locations: [
        {
            id: 1,
            city: "Phoenix, AZ",
            country: "USA",
        },

        {
            id: 2,
            city: "New York, NY",
            country: "USA",
        },
        {
            id: 3,
            city: "Denver, CO",
            country: "USA",
        },

        {
            id: 4,
            city: "Chicago, IL",
            country: "USA",
        },
        {
            id: 5,
            city: "Austin, TX",
            country: "USA",
        },

        {
            id: 6,
            city: "San Deigo, CA",
            country: "USA",
        },
        {
            id: 7,
            city: "Detroit, MI",
            country: "USA",
        },

        {
            id: 8,
            city: "Portland, OR",
            country: "USA",
        },
        {
            id: 9,
            city: "Seattle, WA",
            country: "USA",
        },

        {
            id: 10,
            city: "Vancouver, WA",
            country: "Canada",
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

function SavedLocations() {
    const [searchCity, setSearchCity] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView>
            <View style={styles.savedContainer}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Text style={styles.header}> My Locations </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSearchCity}
                        value={searchCity}
                        placeholder="Placeholder"
                    />
                </SafeAreaView>
                <View style={styles.newForecast}>
                    <View style={styles.opacityForecastBackground}></View>
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
                                <View style={styles.modalButtons}>
                                    <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Cancel</Text>
                                    </Pressable>
                                    <Pressable style={styles.button}>
                                        <Text style={styles.textStyle}>Add</Text>
                                    </Pressable>
                                </View>

                                <NewLocation />
                            </View>
                        </View>
                    </Modal>
                    <Pressable style={styles.newForecastInfo} onPress={() => setModalVisible(true)}>
                        <Text>
                            {data.locations[0].city}
                            {data.locations[0].country}
                        </Text>
                    </Pressable>
                </View>

                {/* <View style={styles.locations}>
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
                </View> */}
            </View>
        </ScrollView>
    );
}

export default SavedLocations;
