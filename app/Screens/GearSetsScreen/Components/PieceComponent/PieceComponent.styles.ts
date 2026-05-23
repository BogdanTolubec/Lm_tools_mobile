import React from "react";
import { StyleSheet } from "react-native";

const piece_component_styles = StyleSheet.create({
    wrapper: {
        flex: 1,

        borderRadius: 33,
    },

    rareness_background_img: {
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    piece_img_wrapper: {
        height: "100%",
        width: "100%",

        padding: 4,
    },

    piece_img: {
        flex: 1,

        justifyContent: "flex-end",
    },

    temperStarIconWrapper: {
        height: "33%",
        width: "33%",
    },

    tempernessLevelText: {
        fontSize: 10,
        fontWeight: "900",
        color: "white",

        textShadowColor: "#000000",
        textShadowRadius: 2,
        textShadowOffset: {height: 2, width: 2},
    },

    jewels_in_piece_wrapper: {
        height: "30%",
        width: "100%",
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",
    
        borderRadius: 10,

        opacity: 0.9,
    },
})

export default piece_component_styles