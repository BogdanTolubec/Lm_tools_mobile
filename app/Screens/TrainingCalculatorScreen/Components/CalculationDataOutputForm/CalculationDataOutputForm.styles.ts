import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/sharedStyles.styles";
import { typography } from "../../../../../utills/typography";

const calculation_data_output_form = StyleSheet.create(
    {
        wrapper: {
            flex: 1,

            alignItems: "center",
            
            padding: 16,

            backgroundColor: colors.surface,

            borderWidth: 1.5,
            borderRadius: 24,
            borderColor: colors.borderSoft,
        },

        calculation_data_wrapper: {
            flex: 1,

            alignItems: "center",
            justifyContent: "center",

            flexDirection: "row",
            flexWrap: "wrap",

            gap: 5,
        },

        header_text: {
            color: colors.gold,

            fontSize: typography.fontSize.lg,
            fontWeight: "800",
        },
    }
)

export default calculation_data_output_form