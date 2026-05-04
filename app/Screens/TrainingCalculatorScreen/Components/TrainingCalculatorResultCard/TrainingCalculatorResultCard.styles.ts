import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/sharedStyles.styles";
import { typography } from "../../../../../utills/typography";

const training_calculator_result_card = StyleSheet.create({
    wrapper: {
        flex: 1,

        flexDirection: "row",
        minWidth: "40%",

        alignItems: "center",

        backgroundColor: colors.surface,
        borderWidth: 1.5,
        borderColor: colors.borderSoft,
        borderRadius: 14,

        paddingHorizontal: 11,
        paddingVertical: 5,
        gap: 20,
    },

    content_wrapper: {
        flex: 1,
        flexDirection: "column",
    },

    resource_type_text: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        marginBottom: 4,
    },

    calculated_data_text:{
        fontSize: typography.fontSize.lg,
        color: colors.textPrimary,
    },

    linearGradient: {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
        borderRadius: 14,
    }
})

export default training_calculator_result_card