import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/sharedStyles.styles";

const calculation_data_input_form = StyleSheet.create({
    wrapper: {
        flex: 1,

        flexDirection: "column",
        
        alignContent: "center",

        padding: 2,
    },

    check_labels_wrapper: {
        flex: 1,
        width: "100%",
    },

    check_label_wrapper: {
        width: "20%"
    },

    button_wrapper: {
        height: 50,
        width: "100%",
    },

    input_and_label_wrapper: {
        flex: 1,

        maxHeight: "22%",
        flexDirection: "row",
        justifyContent: "space-between",

        borderBottomWidth: 1.5,
        borderBottomColor: colors.borderSoft,

        padding: 5,

        gap: 20,
    },

    inputs_wrapper: {
        flex: 1,

        flexDirection: "column",

        width: "100%",

        marginBottom: 10,
        gap: 20,
    },

    input: {
        flex: 1,
        backgroundColor: "#0D1829",
        maxWidth: "50%",

        justifyContent: "center",
    },

    text_input_labels: {
        color: "white",
        width: "50%",
    },

    select_section: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 18,
    },
})

export default calculation_data_input_form