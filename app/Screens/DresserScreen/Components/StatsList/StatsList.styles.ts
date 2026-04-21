import React from "react";
import { StyleSheet } from "react-native";

const stats_list = StyleSheet.create({
    wraper: {
        display: "flex",
        flexDirection: "column"
    },

    stat_wrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        
        borderColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: "solid",
    },
})

export default stats_list