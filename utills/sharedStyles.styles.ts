import React from "react";
import { StyleSheet } from "react-native";

export const textColors = {
  primary: "#F2EBDD",
  secondary: "#B7B0A3",
  muted: "#8F887C",
  gold: "#C8A96B",
  blueAccent: "#89A8D8",
  success: "#7FA36E",
  danger: "#B56A6A",
};

const shared_styles = StyleSheet.create({
    img_in_view: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',

        justifyContent: "center",
        alignItems: "center",
    },

    modal_box_default_wrapper: {
        display: "flex",
        flexDirection: "column",

        left: "10%",
        top: "10%", //just to center component with position absolute :/
        
        height: "80%",
        width: "80%",

        backgroundColor: "#222121",
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        padding: 2,

        overflow: "scroll"
    },

    stats_text: {
        letterSpacing: 1.5,
        fontWeight: "700",
        color: "white"
    },

    background_img: {
        flex: 1,
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
    }
})

export default shared_styles