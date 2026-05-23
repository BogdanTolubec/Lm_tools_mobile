import React from "react";
import { StyleSheet } from "react-native";
import { typography } from "../../../../../utills/styles/typography";

const selected_piece_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 5,

        borderRadius: 14,
    },

    selected_piece_wrapper: {
        height: "20%",
        width: "50%",
    },

    carousel: {
        width: "100%",
        height: "20%",
    },

    slider: {
        height: 50,
        width: "80%",
        overflow: "hidden",
    },

    temperness_level_text:{
        fontSize: typography.fontSize.lg,
        textAlign: "center"
    },

    linearGradient : {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
        borderRadius: 14,
    },
})

export default selected_piece_styles