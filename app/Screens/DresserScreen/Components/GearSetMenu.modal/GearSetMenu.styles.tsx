import React from "react"
import { StyleSheet } from "react-native"

const gear_set_menu = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",

        left: "10%",
        top: "10%",
        
        height: "80%",
        width: "80%",

        backgroundColor: "#141414",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,
    },

    buttons_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        alignItems: "center",
        height: "80%",
        width: "100%"
    },

    button_wrapper: {
        height: "15%",
        width: "80%",
    }
})

export default gear_set_menu