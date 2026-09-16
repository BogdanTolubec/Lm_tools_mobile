import React from "react";
import { StyleSheet } from "react-native";

const jewels_in_selected_piece_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "80%",

        padding: 5,
        borderRadius: 10,

        flexDirection: "column",
        justifyContent: "space-between",
    },

    jewels_wrapper: {
        display: "flex",
        flexDirection: "row",

        gap: 3,
        
        height: 70,
        width: "100%",
    },

    jewels_in_carousel_wrapper: {
        height: "21.5%",
        width: "100%",
    },

    choose_rareness_labels_wrapper: {
        height: 30,
        width: "100%",
    },

    linearGradient : {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
        borderRadius: 14,
    },
})

export default jewels_in_selected_piece_styles