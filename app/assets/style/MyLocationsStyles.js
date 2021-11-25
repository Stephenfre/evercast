import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    //* SAVED CONTAINER

    savedContainer: {
        flex: 1,
        height: height - 80,
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
        height: 35,
        marginTop: 15,
        // marginBottom: 30,
        width: width - 20,
        // borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },

    inputActive: {
        height: 35,
        marginRight: 10,
        width: width - 93,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },

    locationCardA: {
        width: width - 20,
        height: 115,
        backgroundColor: "rgb(255, 48, 123)",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    locationCardB: {
        width: width - 20,
        height: 115,
        backgroundColor: "rgb(27,0,24)",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    cardBackground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        borderRadius: 20,
    },

    topCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        height: 75,
    },

    locations: {
        flexDirection: "column",
        width: width - 30,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

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
        width: "90%",
        height: 30,
        paddingBottom: 5,
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
        position: "relative",
        zIndex: 1,
        height: height,
        // marginTop: 30,
        width: width,
        backgroundColor: "black",
    },

    // opacityForecastBackground: {
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "red",
    //     position: "absolute",
    //     borderTopLeftRadius: 9,
    //     borderTopRightRadius: 9,
    //     borderBottomLeftRadius: 9,
    //     borderBottomRightRadius: 9,
    //     opacity: 0.2,
    // },

    newForecastInfo: {
        paddingTop: 12,
        paddingBottom: 12,
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
