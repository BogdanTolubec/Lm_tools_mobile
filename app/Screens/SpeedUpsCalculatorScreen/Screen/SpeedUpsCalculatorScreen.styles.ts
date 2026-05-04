import { StyleSheet } from "react-native";
import { typography } from "../../../../utills/typography";
import { spacing } from "../../../../utills/sharedStyles.styles";

const speed_ups_calculator_screen = StyleSheet.create({
    wrapper: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },

    inputs_wrapper: {

        width: "90%",

        justifyContent: "center",
        alignItems: "center",
    },

    input_wrapper: {
        width: "100%",
        minHeight: 180,
        marginVertical: 8,
    },

    results_wrapper: {
        position: "relative",
        width: "85%",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#112033",

        marginBottom: 18,
        borderRadius: 25,
        padding: 20,

        gap: 10,
    },

    summary_label_text: {
        color: "#D7AE63",
        fontWeight: "700",
        fontSize: 18,
        letterSpacing: spacing.xxs,
    },

    total_time_text: {
        fontSize: 28,
        fontWeight: "800",
        color: "#F3F1EA",
    },

    linear_gradient: {
        ...StyleSheet.absoluteFill,
    }
})

export default speed_ups_calculator_screen;