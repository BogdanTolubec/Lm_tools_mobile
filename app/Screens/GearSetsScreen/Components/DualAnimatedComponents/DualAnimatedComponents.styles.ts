import React from "react"
import { StyleSheet } from "react-native"

const dual_animated_component_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        gap: 5,
        overflow: "hidden",
        justifyContent: "center",
    },

    left_part_wrapper: {
        height: "100%",
        overflow: "hidden",
    },

    right_part_wrapper: {
        height: "100%",
        flexDirection: "row-reverse",
        overflow: "hidden",
        position: "relative",
    },

    left_component_wrapper: {
        height: "100%",
    },

    right_component_wrapper: {
        height: "100%",
    },

    arrow_wrapper: {
        position: "absolute",
        top: "50%",
        left: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        fontSize: 30,
        fontWeight: "900",
    },
})

export default dual_animated_component_styles