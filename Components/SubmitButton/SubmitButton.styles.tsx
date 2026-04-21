import React from "react";
import { StyleSheet } from "react-native";

const submit_button = StyleSheet.create({
    wrapper: {
        height: "100%",
        width: "100%",
        borderColor: "rgb(0,0,0)",
        borderWidth: 2,
        borderRadius: 5,
    },

    gradient: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
    },
    
    text: {
        margin: 2,
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        letterSpacing: 2,
        color: "white",
    }
})

export default submit_button