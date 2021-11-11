import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
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
});
