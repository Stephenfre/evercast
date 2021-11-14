import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    //* SAVED CONTAINER

    savedContainer: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: "grey",
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

    cardBackground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        borderRadius: 20,
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

    newForecast: {
        height: 40,
        marginTop: 30,
        width: width - 20,
    },

    opacityForecastBackground: {
        height: "100%",
        width: "100%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        opacity: 0.2,
    },

    newForecastInfo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Helvetica",
        paddingTop: 12,
        paddingBottom: 5,
        paddingLeft: 20,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        zIndex: 2,
        width: "93%",
        // backgroundColor: "black",
    },

    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },

    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Helvetica",
    },

    modalView: {
        position: "absolute",
        top: 5,
        margin: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: "center",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
        width: width,
        height: height - 125,
    },

    buttonOpen: {
        backgroundColor: "black",
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
