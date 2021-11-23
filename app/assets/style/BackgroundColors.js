import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    // ** TIME OF DAY BACKGROUND COLORS //
    earlyContainer: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(0, 0, 0, 100)",
        alignItems: "center",
    },

    morningContainer: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgb(255, 106, 60)",
        alignItems: "center",
    },

    afternoonContainer: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgb(255, 69, 136)",
        alignItems: "center",
    },

    eveningContainer: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgb(177, 43, 0)",
        alignItems: "center",
    },

    nightContainer: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgb(0, 0, 0)",
        alignItems: "center",
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
    },

    // ** WEATHER CONDITION BACKGROUND COLORS //

    morningContainerOvercast: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(99, 103, 116, 75)",
        alignItems: "center",
    },

    afternoonContainerOvercast: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(80, 83, 95, 88)",
        alignItems: "center",
    },

    eveningContainerOvercast: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(46, 48, 54, 100)",
        alignItems: "center",
    },

    morningContainerRain: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(22, 38, 95, 75)",
        alignItems: "center",
    },

    afternoonContainerRain: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(12, 25, 68, 88)",
        alignItems: "center",
    },

    eveningContainerRain: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(6, 11, 30, 100)",
        alignItems: "center",
    },

    morningContainerSnow: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(167, 213, 255, 100)",
        alignItems: "center",
    },

    afternoonContainerSnow: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(82, 128, 171, 100)",
        alignItems: "center",
    },

    eveningContainerSnow: {
        flex: 3,
        height: height + 175,
        width: width,
        backgroundColor: "rgba(52, 83, 112, 100)",
        alignItems: "center",
    },
});
