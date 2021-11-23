import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    // * BOTTOM CONTAINER
    opacityBottomBackground: {
        height: 480,
        width: "100%",
        backgroundColor: "#CEB68C",
        position: "absolute",
        borderRadius: 20,
        opacity: 0.2,
    },

    bottomContainer: {
        width: width - 35,
        height: 400,
        marginTop: 20,
    },

    bottomContent: {
        width: "100%",
        height: "15%",
    },

    weeklyCast: {
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
    },

    day: {
        marginLeft: 20,
        marginRight: 40,
        width: 100,
    },

    dayText: {
        paddingTop: 5,
        fontSize: 18,
        color: "white",
        fontFamily: "Helvetica",
        fontWeight: "400",
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

    image: {
        // borderWidth: 1,
        // borderColor: "red",
        width: 50,
        height: 50,
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
