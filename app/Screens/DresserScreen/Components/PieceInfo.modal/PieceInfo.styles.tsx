import React from "react";
import { StyleSheet } from "react-native";

const piece_info = StyleSheet.create(
    {
        wrapper: {
            display: "flex",
            flexDirection: "column",

            justifyContent: "space-between",
    
            left: "2.5%",
            top: "20%", //just to center component with position absolute :/
            
            height: "60%",
            width: "95%",
    
            backgroundColor: "#2b2b2b",
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 2,
            overflow: "scroll",
        },

        gear_and_jewels_row: {
            height: "50%",
            width: "100%",

            display: "flex",
            flexDirection: "row",
        },

        piece_attributes_wrapper: {
            display: "flex",
            flexDirection: "column",

            justifyContent: "space-between",

            height: "40%",
            width: "100%",
        },

        piece_img_wrapper: {
            height: "100%",
            width: "19%",
        },

        jewels_wrapper: {
            height: "100%",
            width: "80%",

            display: "flex",
            flexDirection: "row",


            justifyContent: "space-evenly",
        },

        jewel_wrapper: {
            height: "100%",
            width: "24%",
        },

        temper_section_wrapper: {
            height: "45%",
            width: "100%",

            display: "flex",   
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },

        temper_icon_wrapper: {
            height: "90%",
            width: "20%"
        },

        temper_level_input: {
            justifyContent: "flex-start",
            alignItems: "center",

            height: "60%",
            width: "20%",

            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 2,
        },

        temper_submit_button: {
            height: "60%",
            width: "35%",
        },

        stats_wrapper: {
            maxHeight: "50%",
            width: "100%",
        },
    }
)

export default piece_info