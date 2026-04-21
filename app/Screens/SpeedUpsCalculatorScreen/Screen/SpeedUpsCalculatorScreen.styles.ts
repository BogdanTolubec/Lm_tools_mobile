import { StyleSheet } from "react-native";
import { typography } from "../../../../utills/typography";

const speed_ups_calculator_screen = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "100%",
    },

    inputs_wrapper: {
        width: "100%",
        alignItems: "center",
        padding: 8,
        paddingBottom: 24,
        gap: 12,
    },

    input_wrapper: {
        width: "70%",
        minHeight: 180,
    },

    results_wrapper: {
        width: "100%",
        minHeight: 72,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(0,0,0,0.7)",
        paddingHorizontal: 12,
        paddingVertical: 12,
    },

    result_text: {
        color: "white",
        fontWeight: "700",
        fontSize: 21,
        letterSpacing: 2,
        textAlign: "center",
    },
});

export default speed_ups_calculator_screen;