import React from "react";
import { StyleSheet } from "react-native";

const piece_in_set = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",       
    },

    rareness_background_img: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    piece_img_wrapper: {
        height: "90%",
        width: "90%",
    },

    piece_img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        justifyContent: "flex-end",
    },

    jewels_wrapper: {
        height: "30%",
        width: "100%",
    },

    temperStarIconWrapper: {
        height: "33%",
        width: "33%",
    },

    tempernessLevelText: {
        fontSize: 10,
        fontWeight: "700",
        color: "white",

        textShadowColor: "#000000",
        textShadowRadius: 2,
        textShadowOffset: {height: 1, width: 1},
    },
})

export default piece_in_set