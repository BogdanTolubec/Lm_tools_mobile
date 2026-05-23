import React from "react"
import { StyleSheet } from "react-native"

const jewels_of_piece_styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",
    
        borderRadius: 10,

        opacity: 0.9,
    },

    jewel_wrapper: {
        height: "100%",
        width: "31%",
    }
})

export default jewels_of_piece_styles