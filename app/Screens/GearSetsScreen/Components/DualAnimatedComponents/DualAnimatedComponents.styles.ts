import React from "react";
import { StyleSheet } from "react-native";

const dual_animated_component_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 5
    },

    left_part_wrapper: {
        height: "100%",
        flexDirection: "row",
    },

    right_part_wrapper: {
        height: "100%",
    },

    left_component_wrapper: {
        flex: 1,
    },

    right_component_wrapper: {
        flex: 1,
    },

    arrow_wrapper: {
        alignSelf: "center",
        height: 30,
        width: 30,
    },

    text: {
        fontSize: 30,
        fontWeight: "900",
    },
})

export default dual_animated_component_styles