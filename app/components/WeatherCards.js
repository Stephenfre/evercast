import React, { useState } from "react";
import { connect } from "react-redux";
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";

import styles from "../assets/style/MyLocationsStyles";

import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SwipeListView } from "react-native-swipe-list-view";

function WeatherCards({ savedLocations }) {
    const [data, setData] = useState(
        savedLocations.map((location, index) => ({
            key: `${index}`,
            temp: location.temp,
            city: location.city,
            country: location.country,
            image: location.img,
            rain: location.precip,
            wind: location.wind,
        }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].deleteRow();
        }
    };

    const VisableItem = (props) => {
        const { data } = props;
        return (
            <View>
                <TouchableHighlight>
                    <View style={data.item.temp > 66 ? styles.locationCardA : styles.locationCardB}>
                        {data.item.temp > 66 ? (
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
                                <Text style={styles.locationTemp}>{Math.round(data.item.temp)}</Text>
                                <Text style={styles.locationCity}>{data.item.city}</Text>
                                <Text style={styles.locationCountry}>{data.item.country}</Text>
                            </View>

                            <View>
                                <Image
                                    source={{
                                        uri: "http://openweathermap.org/img/wn/" + data.item.image + "@4x.png",
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
                                <Text style={styles.savedDetails}>{data.item.precip}</Text>
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
                                <Text style={styles.savedDetails}>{data.item.wind} kh/m</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

    const renderItem = (data, rowMap) => {
        return <VisableItem data={data} />;
    };

    const HiddenItemsWithActions = (props) => {
        const { onClose, onDelete } = props;

        return (
            <View
                style={{
                    // borderColor: "red",
                    // borderWidth: 1,
                    height: 110,
                    width: 150,
                    flexDirection: "row",
                    marginTop: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 10,
                    marginLeft: 230,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "grey",
                        width: "50%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                    }}
                >
                    <Text style={{ color: "white", fontSize: 18, fontFamily: "Helvetica" }} onPress={onClose}>
                        Close
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "red",
                        width: "50%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                >
                    <Text style={{ color: "white", fontSize: 18, fontFamily: "Helvetica" }} onPress={onDelete}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemsWithActions
                data={data}
                rowMap={rowMap}
                closeRow={() => closeRow(rowMap, data.item.key)}
                deleteRow={() => deletRow(rowMap, data.item.key)}
            />
        );
    };

    return (
        <View style={styles.locations}>
            <SwipeListView
                data={data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                // leftOpenValue={150}
                rightOpenValue={-150}
            />
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
