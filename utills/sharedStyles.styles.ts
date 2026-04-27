import React from "react";
import { StyleSheet } from "react-native";

export const colors = {
    bgPrimary: '#08111F',
    bgSecondary: '#0E1A2B',
    surface: '#112033',
    surfaceRaised: '#15263D',

    gold: '#D7AE63',
    goldBright: '#F0C97B',

    violet: '#7D61C9',
    violetSoft: '#5A4A8A',

    textPrimary: '#F3F1EA',
    textSecondary: '#B7BCC8',
    textMuted: '#7F8797',

    borderSoft: 'rgba(255,255,255,0.08)',
    borderGold: 'rgba(215,174,99,0.55)',
    borderViolet: 'rgba(125,97,201,0.8)',
}

export const radius = {
    sm: 12,
    md: 16,
    lg: 22,
    xl: 26,
}

export const  spacing = {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
}

export const iconSizes = {
    xs: 10,
    sm: 15,
    md: 20,
    lg: 25,
    xl: 30,
    xxl: 40,
    xxxl: 50,
}

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
    },
})

export default shared_styles