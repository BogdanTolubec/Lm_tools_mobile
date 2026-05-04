import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../../../utills/sharedStyles.styles";
import { typography } from "../../../../../utills/typography";

const check_label_styles = StyleSheet.create({
    selectTileWrap: {
        width: "100%",
    },
    
    selectTile: {
        borderRadius: 18,
        borderWidth: 1,
        borderColor: colors.borderSoft,
        backgroundColor: "rgba(18,33,54,0.96)",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        overflow: "hidden",
        padding: 5,
    },

    selectTileActive: {
        shadowColor: colors.borderGold,
        shadowOpacity: 0.18,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },

    selectTileGradient: {
        ...StyleSheet.absoluteFill,
        backgroundColor: "transparent",
    },

    selectTileText: {
        fontSize: typography.fontSize.sm,
        fontWeight: "600",
        color: colors.textSecondary,
    },
    
    selectTileTextActive: {
        color: colors.textPrimary,
    },
})

export default check_label_styles