import React from "react";
import { StyleSheet } from "react-native";

const error_page = StyleSheet.create({
    not_found: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        backgroundColor: "#222",
    },
    
    center_block: {
        display: "flex",
        flexDirection: "column",
        
        maxWidth: 400,
        width: "90%",
        textAlign: "center",
        lineHeight: 1.4,
        alignItems: "center",
    },
    
    status: {
        height: 158,
        lineHeight: 153,
    },
    
    text_404: {
        fontFamily: "josefin sans, sans-serif",
        color: "white",
        fontSize: 70,
        margin: 0,
        fontWeight: "700",

        textShadowColor: "#c9c9c9",
        textShadowRadius: 2,
        textShadowOffset: {height: 4, width: 4},
    },
    
    span: {
        textShadowColor: "#ffab00",
        textShadowRadius: 2,
        textShadowOffset: {height: 4, width: 4},
    },
    
    text: {
        fontFamily: "josefin sans,sans-serif",
        color: "#c9c9c9",
        fontSize: 18,
        fontWeight: "700",
        marginTop: 0,
        marginBottom: 15,
    },
}
)

export default error_page