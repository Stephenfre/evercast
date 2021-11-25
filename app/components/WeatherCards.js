import React from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";

import styles from "../assets/style/MyLocationsStyles";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function WeatherCards({ savedLocations }) {
    return (
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
                                    <MaterialCommunityIcons name="weather-windy-variant" color="white" size={13} />
                                    <Text style={styles.savedDetails}>{res.wind} kh/m</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        savedLocations: state.savedLocations,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCards);
