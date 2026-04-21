import React from "react";
import { StyleSheet } from "react-native";

const gear_set_title_change_component = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",

        top: "30%",
        left: "10%",

        justifyContent: "space-between",
        alignItems: "center",
        
        height: "40%",
        width: "80%",

        backgroundColor: "#141414",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 5,
    },

    input: {
        width: "80%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 10,
        fontSize: 16,
        padding: 5,
    
        opacity: 0.6,
    },
    
    modal_title: {
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 2,
        color: "white"
    },

    button_wrapper: {
        height: "20%",
        width: "80%",
    }
})

export default gear_set_title_change_component