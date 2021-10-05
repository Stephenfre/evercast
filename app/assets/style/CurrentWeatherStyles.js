import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 3,
        height: "100%",
        width: width,
        backgroundColor: "rgb(255, 48, 123)",
        // justifyContent: "center",
        alignItems: "center",
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    // * TOP CONTAINER

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

    Image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },

    currentDetails: {
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

    // * MIDDLE CONTAINER

    middleContainer: {
        height: 100,
        width: width,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    middleContent: {
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },

    time: {
        color: "white",
    },

    temp: {
        color: "white",
    },

    bottomContent: {
        height: 50,
        width: "100%",
        backgroundColor: "green",
    },
});
