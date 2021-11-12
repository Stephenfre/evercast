import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    // * MIDDLE CONTAINER

    middleContainer: {
        height: 100,
        width: width - 40,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "red",
    },

    opacityMiddleBackground: {
        height: "100%",
        width: "100%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        borderRadius: 20,
        opacity: 0.2,
    },

    middleContent: {
        alignItems: "center",
        paddingLeft: 12,
        paddingRight: 12,
    },

    time: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Helvetica",
    },

    temp: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Helvetica",
    },

    image: {
        width: 50,
        height: 40,
    },

    rainTime: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Helvetica",
    },

    rainTemp: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "Helvetica",
    },

    rainPerc: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        color: "#73C4FF",
        fontFamily: "Helvetica",
    },

    rainImage: {
        width: 40,
        height: 30,
    },
});
