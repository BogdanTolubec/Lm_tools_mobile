import React from "react";
import { StyleSheet } from "react-native";

const set_of_pieces = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    piece_wrapper: {
        height: 80,
        width: 80,       
    },

    first_row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        width: "100%",
    },

    title: {
        margin: 0,
        letterSpacing: 3,
        fontSize: 18,
        fontFamily: "josefin sans, sans-serif",
        color: "white",
        fontWeight: "700",

        textShadowColor: "#c9c9c9",
        textShadowRadius: 2,
        textShadowOffset: {height: 2, width: 2},
    },

    stats_icon: {
        height: 22,
        width: 22,
    },

    gear_box: {
        height: "90%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding: 3,

        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    start_of_set: {
        height: "22%",
        width: "100%",
        gap: 15,

        display: "flex",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    center_of_set_wrapper: {
        height: "45%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
    },

    center_of_set:{
        height: "30%",
        width: "100%",
        display: "flex",

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    end_of_set: {
        height: "22%",
        width: "100%",
        gap: 15,

        display: "flex",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    modal_content: {
        borderColor: "black",
        backgroundColor: "white"
    },

    button_wrapper: {
        height: "7%",
        width: "60%",
    }
})

export default set_of_pieces