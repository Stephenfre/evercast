import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    // * TOP CONTAINER

    topContainer: {
        height: 250,
        width: "100%",
        flexDirection: "column",
        marginTop: 50,
    },

    opacityTopBackground: {
        height: 300,
        width: "95%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        left: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        opacity: 0.2,
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
        paddingRight: 10,
        paddingLeft: 15,
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
        paddingLeft: 20,
    },

    condition: {
        borderRadius: 10,
        padding: 10,
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
        paddingTop: 12,
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
        paddingTop: 5,
        paddingBottom: 10,
    },

    details: {
        padding: 5,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Helvetica",
    },

    // * CONDITION CONTAINER

    raining: {
        height: 70,
        marginTop: 30,
        width: width - 20,
    },
});
