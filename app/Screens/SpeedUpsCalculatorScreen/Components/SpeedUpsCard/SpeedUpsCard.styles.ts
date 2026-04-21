import React from "react";
import { StyleSheet } from "react-native";
import { typography } from "../../../../../utills/typography";

const speed_ups_card = StyleSheet.create({
    wrapper:{
        flex: 1,

        alignItems: "center",
        maxHeight: "100%",
        width: "100%",

        backgroundColor: "#171B22",

        shadowColor: '#000',
        shadowOpacity: 0.28,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },

        borderRadius: 20,

        marginBottom: 10,
        padding: 10,
    },

    first_row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
    },

    second_row: {
        flex: 1,
        
        width: "100%",
        alignItems: "center",
        margin: 5,
    },

    third_row: {
        flex: 1,
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        
        margin: 5,
    },

    forth_row: {
        flex: 1,
        flexDirection: "row",

        width: "100%",

        justifyContent: "space-between",
        margin: 5,
    },

    time_badge: {
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 5,
    },
    
    input: {
        maxHeight: 30,

        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: "white",
        fontWeight: "700",
        fontFamily: typography.fontFamily.regular,
    },
})

export default speed_ups_card