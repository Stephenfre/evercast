import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    //* SAVED CONTAINER

    cardBackground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        borderRadius: 20,
    },

    savedContainer: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: "black",
        alignItems: "center",
    },

    header: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Helvetica",
    },

    input: {
        height: 30,
        margin: 12,
        marginBottom: 30,
        width: width - 75,
        // borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },

    locations: {
        flexDirection: "row",
        width: width - 30,
        height: 150,
        justifyContent: "space-around",
    },

    locationCardA: {
        width: 150,
        height: "100%",
        backgroundColor: "rgb(255, 48, 123)",
        borderRadius: 20,
    },

    locationCardB: {
        width: 150,
        height: "100%",
        backgroundColor: "rgb(27,0,24)",
        borderRadius: 20,
    },

    topCard: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
    },

    savedCity: {},

    locationTemp: {
        fontSize: 35,
        color: "#fff",
        fontFamily: "Helvetica",
    },

    locationCity: {
        fontSize: 12,
        color: "#fff",
        fontFamily: "Helvetica",
    },

    locationCountry: {
        fontSize: 10,
        color: "#fff",
        fontFamily: "Helvetica",
        paddingTop: 2,
    },

    locationDetails: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: "90%",
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
        // backgroundColor: "red",
        marginLeft: 11,
    },

    savedDetails: {
        padding: 5,
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Helvetica",
        fontSize: 12,
    },
});
