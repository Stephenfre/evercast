import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    // * MIDDLE CONTAINER

    middleContainer: {
        height: 100,
        width: width - 20,
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
});
