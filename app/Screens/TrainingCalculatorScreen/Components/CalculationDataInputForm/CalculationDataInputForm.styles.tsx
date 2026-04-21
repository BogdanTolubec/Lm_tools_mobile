import React from "react";
import { StyleSheet } from "react-native";

const calculation_data_input_form = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        height: "60%",
        width: "100%",

        justifyContent: "space-between",

        padding: 2,

        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },

    check_labels_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        height: "30%",
        width: "100%",
    },

    inputs_wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "12%",
        width: "100%",
    },

    check_label_wrapper: {
        height: "100%",
        width: "22%"
    },

    button_wrapper: {
        height: "12%",
        width: "100%",
    },

    text_input: {
        borderColor: "white",
        borderWidth: 2,
        borderStyle: "solid",

        color: "white",
        fontWeight: "500",
    },

    text_input_labels: {
        color: "white",
        alignSelf: "center",
    },

    select_section: {
        height: "45%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})

export default calculation_data_input_form