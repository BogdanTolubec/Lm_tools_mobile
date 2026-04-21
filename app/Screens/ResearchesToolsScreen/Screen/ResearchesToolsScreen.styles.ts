import React from "react"
import { StyleSheet } from "react-native"

const home = StyleSheet.create(
    {
        wrapper :{
            minHeight: "100%",
            width: "100%",

            flex: 1,
            flexDirection: "column",
        },

        background_img: {
            flex: 1,
            width: "100%" ,
            height: "100%",

            justifyContent: "center",
            alignItems: "center",
        },

        greetings_text: {
            fontSize: 20,
            fontWeight: "700",
            color: "#fffff",

            textShadowColor: "#c9c9c9",
            textShadowRadius: 2,
            textShadowOffset: {height: 4, width: 4},
        }
})

export default home