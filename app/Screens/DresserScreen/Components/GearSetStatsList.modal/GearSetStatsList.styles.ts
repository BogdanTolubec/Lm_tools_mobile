import React from "react"
import { StyleSheet } from "react-native"

const gear_set_stats_list = StyleSheet.create({
    stats_list_wrapper: {
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
    },

    stat_wrapper:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        borderColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: "solid",
    },

    title: {
        letterSpacing: 2,
        fontSize: 18,
        fontWeight: "900",

        alignSelf: "center",
        marginBottom: 10,

        color: "white"
    },

    text: {
        letterSpacing: 1.5,
        fontWeight: "700",
        color: "white"
    }
})

export default gear_set_stats_list