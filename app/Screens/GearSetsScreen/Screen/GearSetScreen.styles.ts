import React from "react";
import { StyleSheet } from "react-native";

const gear_set_screen_styles = StyleSheet.create({
        wrapper: {
            flex: 1,
        },

        inner_wrapper: {
            flex: 1,
            alignContent: "space-between",

            gap: 5,
            padding: 8,
        },

        piece_set_and_selected_piece_wrapper: {
            width: "90%",
            alignSelf: "center"
        },

        piece_set_wrapper: {
            flex: 1,
        },

        selected_piece_wrapper: {
            flex: 1,
        },

        stats_component_wrapper_full: {
            width: "100%",
            alignContent: "center",
        },
    }
)

export default gear_set_screen_styles