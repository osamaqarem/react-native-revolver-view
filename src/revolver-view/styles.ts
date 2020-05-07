import { StyleSheet } from "react-native";
import { ICON_SIZE } from "./components/SearchIcon";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        borderRadius: 8,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    rotatingComponentContainer: {
        position: "absolute",
        left: 10,
        justifyContent: "center",
        zIndex: 1
    },
    ripple: {
        position: "absolute",
        top: 8,
        left: 8,
        width: ICON_SIZE * 1.1,
        height: ICON_SIZE * 1.1,
        borderRadius: ICON_SIZE / 2,
        backgroundColor: "#000",
    },
    mask: {
        flex: 1
    },
    maskedView: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center"
    },
    maskedViewContainer: {
        ...StyleSheet.absoluteFillObject,
        left: -ICON_SIZE
    }
});
