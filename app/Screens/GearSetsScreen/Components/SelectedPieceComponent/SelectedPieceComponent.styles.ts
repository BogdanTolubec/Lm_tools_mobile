import React from "react";
import { StyleSheet } from "react-native";
import { typography } from "../../../../../utills/styles/typography";

const selected_piece_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 5,

        borderRadius: 14,
    },

    content_wrapper: {
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
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

    save_button: {
        height: "10%",
        width: "60%",
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