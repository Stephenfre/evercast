import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, SafeAreaView, StatusBar, Pressable, Modal, Alert, Dimensions } from "react-native";

import NewLocation from "./NewLocation";
import WeatherCards from "./WeatherCards";

import styles from "../assets/style/MyLocationsStyles";

function SavedLocations({ savedLocations }) {
    const [query, setQuery] = useState("");
    const [city, setCity] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const focusSearch = useRef(null);

    const { width, height } = Dimensions.get("window");

    useEffect(() => {
        focusSearch.current.focus();
    }, []);

    const getCity = async (query) => {
        const results = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=7613dff2af161bb376b90a08f6c9d4df`
        );

        const cityData = await results.json();
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
            }
        };
        loadCities();

        return () => {
            currentQuery = false;
            controller.abort();
        };
    }, [query]);

    return (
        <>
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
                                <Pressable onPress={() => setQuery(!query)}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: "#fff",
                                            fontFamily: "Helvetica",
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
                        {city.message === "city not found" ? (
                            <View style={styles.newForecastInfo} onPress={() => setModalVisible(true)}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "white",
                                        fontFamily: "Helvetica",
                                    }}
                                >
                                    No Results
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "white",
                                        fontFamily: "Helvetica",
                                    }}
                                >
                                    {city.message}
                                </Text>
                            </View>
                        ) : (
                            <Pressable style={styles.newForecastInfo} onPress={() => setModalVisible(true)}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        color: "white",
                                        fontFamily: "Helvetica",
                                    }}
                                >
                                    {city.name}
                                </Text>
                            </Pressable>
                        )}
                    </SafeAreaView>
                ) : null}

                <WeatherCards />
            </View>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        savedLocations: state.savedLocations,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocations);
