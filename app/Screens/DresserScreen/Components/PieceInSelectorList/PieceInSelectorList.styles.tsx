import React from "react"
import { StyleSheet } from "react-native"

const piece_in_selector_list = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",

        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
        marginBottom: 2,
    },

    rareness_background_img_wrapper: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    first_row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        width: "100%"
    },

    img_wrapper: {
        height: "90%",
        width: "90%",
    },
})

export default piece_in_selector_list