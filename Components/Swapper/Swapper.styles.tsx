import React from "react";
import { StyleSheet } from "react-native";

const swapper = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%" ,
        height: "100%",

        alignItems: "center",
        justifyContent: "center",
    },

    centerComponent: {
        height: "100%",
        width: "85%",
    },

    icon_wrapper: {
        height: "10%",
        width: "8%",

        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",

        justifyContent: "center",
        backgroundColor: "black",
    },

    icon: {
        height: 20,
        width: 18
    },
})

export default swapper