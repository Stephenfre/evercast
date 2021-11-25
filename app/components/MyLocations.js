import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Pressable,
    Modal,
    Alert,
    Dimensions,
    Image,
} from "react-native";

import NewLocation from "./NewLocation";

import styles from "../assets/style/MyLocationsStyles";
import currentStyles from "../assets/style/CurrentStyles";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function SavedLocations({ savedLocations }) {
    const [query, setQuery] = useState("");
    const [city, setCity] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const focusSearch = useRef(null);
    const [data, setData] = useState({
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
    });

    const { width, height } = Dimensions.get("window");

    useEffect(() => {
        focusSearch.current.focus();
    }, []);

    const getCity = async (query) => {
        const results = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=7613dff2af161bb376b90a08f6c9d4df`
        );

        const cityData = await results.json();
        console.log("data", cityData);
        return cityData;
    };

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    useEffect(() => {
        let currentQuery = true;
        const controller = new AbortController();

        const loadCities = async () => {
            if (!query) return setCity([]);

            await sleep(450);
            if (currentQuery) {
                const city = await getCity(query, controller);
                setCity(city);
                console.log("city here", city);
            }
        };
        loadCities();

        return () => {
            currentQuery = false;
            controller.abort();
        };
    }, [query]);

    return (
        <ScrollView>
            <View style={styles.savedContainer}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Text style={styles.header}> My Locations </Text>
                    {query ? (
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 65,
                                width: width - 20,
                            }}
                        >
                            {!query ? (
                                <TextInput
                                    style={styles.input}
                                    ref={focusSearch}
                                    onChangeText={setQuery}
                                    value={query}
                                    placeholder="Search for a city"
                                />
                            ) : (
                                <TextInput
                                    style={styles.inputActive}
                                    ref={focusSearch}
                                    onChangeText={setQuery}
                                    value={query}
                                    placeholder="Search for a city"
                                />
                            )}
                            {query ? (
                                <Pressable
                                    // style={MyLocationsStyles.button}
                                    onPress={() => setQuery(!query)}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            // fontWeight: "bold",
                                            color: "#fff",
                                            fontFamily: "Helvetica",
                                            // marginLeft: 10,
                                        }}
                                    >
                                        Cancel
                                    </Text>
                                </Pressable>
                            ) : null}
                        </View>
                    ) : (
                        <View
                            style={{
                                height: 75,
                                width: width - 20,
                            }}
                        >
                            {!query ? (
                                <TextInput
                                    style={styles.input}
                                    ref={focusSearch}
                                    onChangeText={setQuery}
                                    value={query}
                                    placeholder="Search for a city"
                                />
                            ) : (
                                <TextInput
                                    style={styles.inputActive}
                                    ref={focusSearch}
                                    onChangeText={setQuery}
                                    value={query}
                                    placeholder="Search for a city"
                                />
                            )}
                        </View>
                    )}
                </SafeAreaView>
                {query ? (
                    <SafeAreaView style={styles.newForecast}>
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
                                    <NewLocation
                                        city={city}
                                        modalVisible={modalVisible}
                                        setModalVisible={setModalVisible}
                                        query={query}
                                        setQuery={setQuery}
                                    />
                                </View>
                            </View>
                        </Modal>

                        <Pressable style={styles.newForecastInfo} onPress={() => setModalVisible(true)}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "white", fontFamily: "Helvetica" }}>
                                {city.name}
                            </Text>
                        </Pressable>
                    </SafeAreaView>
                ) : null}

                {/* 
                    SAVED WEATHERS CARDS ARE BELOW
                */}

                <View style={styles.locations}>
                    {savedLocations.map((res, index) => {
                        return (
                            <View key={index}>
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
                                            <Text style={styles.locationTemp}>{Math.round(res.temp)}</Text>
                                            <Text style={styles.locationCity}>{res.city}</Text>
                                            <Text style={styles.locationCountry}>{res.country}</Text>
                                        </View>

                                        <View>
                                            <Image
                                                source={{
                                                    uri: "http://openweathermap.org/img/wn/" + res.img + "@4x.png",
                                                }}
                                                style={{ width: 60, height: 80 }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.locationDetails}>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: "row",
                                                paddingRight: 40,
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

const mapStateToProps = (state) => {
    return {
        savedLocations: state.savedLocations,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocations);
