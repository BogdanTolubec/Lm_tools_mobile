import React from 'react'
import { StyleSheet } from 'react-native'

const modal_component = StyleSheet.create({
    wrapper: {
        position: 'absolute', //because of this cannot center components inside with justify-content and aligns :/
    },

    background: {
        height: "100%",
        width: "100%",

        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },

    content: {
        height: "95%",
        width: "100%",
        position: 'absolute',
    },

    closing_icon_line: {
        height: "5%",
        width: "100%",
    },

    closing_icon: {
        height: "100%",
        width: "8%",
        left: "90%",

        position: "absolute",
    },
})

export default modal_component