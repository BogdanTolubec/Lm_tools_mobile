import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/styles/sharedStyles.styles";
import { typography } from "../../../../../utills/styles/typography";

const stat_display_card_styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
    
        alignItems: "center",
    
        backgroundColor: colors.surface,
        borderWidth: 1.5,
        borderColor: colors.borderSoft,
        borderRadius: 14,
    
        paddingHorizontal: 5,
        paddingVertical: 5,
    },

    linearGradient: {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
        borderRadius: 14,
    },

    text: {
        fontSize: typography.fontSize.xs,
        fontWeight: "700",
    },
})

export default stat_display_card_styles