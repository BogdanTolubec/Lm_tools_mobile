import React from "react";
import { StyleSheet } from "react-native";

const check_label = StyleSheet.create({
    wrapper: {
        display: "flex",
        
        height: "100%",
        width: "100%",
    
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgb(0,0,0)",
        borderRadius: 5,
        backgroundColor: "rgb(35, 67, 88)",
    },

    text: {
        height: "100%",
        width: "100%",

        textAlign: "center",
        textAlignVertical: "center",

        fontWeight: "bold",
        color: "white",
    }
})

export default check_label