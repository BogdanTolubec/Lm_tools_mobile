import React from "react";
import { StyleSheet } from "react-native";

const jewels_in_selected_piece_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 5,
        flexDirection: "column",
        justifyContent: "space-between",
    },

    jewels_wrapper: {
        display: "flex",
        flexDirection: "row",
        
        height: 70,
        width: "100%",
    },

    jewels_in_carousel_wrapper: {
        height: "20%",
        width: "100%"
    },

    choose_rareness_labels_wrapper: {
        height: 30,
        width: "100%",
    },
})

export default jewels_in_selected_piece_styles