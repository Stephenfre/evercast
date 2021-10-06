import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 3,
        height: 1015,
        width: width,
        backgroundColor: "rgb(255, 48, 123)",
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
        padding: 1,
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

    // * MIDDLE CONTAINER

    middleContainer: {
        height: 120,
        width: width,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 40,
    },

    opacityMiddleBackground: {
        height: 85,
        width: "95%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        top: 30,
        left: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        opacity: 0.2,
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

    // * BOTTOM CONTAINER

    opacityBottomBackground: {
        height: 400,
        width: "100%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        top: 20,
        // left: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        opacity: 0.2,
    },

    bottomContainer: {
        width: width - 20,
        height: 68,
    },

    bottomContent: {
        width: "100%",
        height: "100%",
    },

    weeklyCast: {
        flexDirection: "row",
        paddingTop: 20,
        height: "100%",
        alignItems: "center",
    },

    day: {
        marginLeft: 20,
        marginRight: 50,
        width: 100,
    },

    dayText: {
        fontSize: 18,
        color: "white",
        fontFamily: "Helvetica",
        paddingTop: 5,
    },

    hiTemp: {
        fontSize: 20,
        color: "white",
        fontFamily: "Helvetica",
        paddingTop: 5,
    },
    lowTemp: {
        fontSize: 20,
        color: "#575757",
        fontFamily: "Helvetica",
        paddingTop: 5,
    },

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
