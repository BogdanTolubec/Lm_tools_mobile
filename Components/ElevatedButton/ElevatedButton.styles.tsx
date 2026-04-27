import React from "react";
import { StyleSheet } from "react-native";
import { colors, spacing } from "../../utills/sharedStyles.styles";

const elevated_button = StyleSheet.create({
    wrapper: {
        flexGrow: 1,

        borderColor: "#112033",
        borderWidth: 1,
        borderRadius: 14,

        justifyContent: "center",
        alignContent: "center",
    },
    
    text: {
        margin: 2,
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        letterSpacing: spacing.xs,
        color: colors.textPrimary,
    }
})

export default elevated_button