import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/styles/sharedStyles.styles";

const stats_component_styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
        flexDirection: "row",

        justifyContent: "space-between",

        padding: 5,
        borderRadius: 15,

        overflow: "hidden",
    },

    
    stats_column: {
        height: "100%",
        width: "32%",

        flexDirection: "column",

        gap: 5,
    },
    
})

export default stats_component_styles