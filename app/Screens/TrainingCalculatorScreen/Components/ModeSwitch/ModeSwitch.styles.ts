import React from "react";
import {StyleSheet} from "react-native";
import { typography } from "../../../../../utills/typography";
import { colors } from "../../../../../utills/sharedStyles.styles";

const mode_switch_styles = StyleSheet.create(
    {
        wrapper: {
            flex: 1,

            height: 62,
            width: "90%",
            flexDirection: "row",
        },

        mode_switch_tab: {
            flex: 1,
            width: "49%",

            borderRadius: 18,
        },

        mode_switch_tab_active: {
            backgroundColor: "#264670",

            shadowColor: "#000",
            shadowOpacity: 0.18,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
        },

        mode_switch_tab_inactive: {
            backgroundColor: "rgba(15,28,46,0.88)",

            borderColor: colors.borderSoft,
            borderWidth: 1.5,

            shadowColor: "#000",
            shadowOpacity: 0.18,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
        },

        mode_switch_tab_text: {
            fontSize: typography.fontSize.md,
            fontWeight: "800",
            color: colors.textSecondary,
        },

        mode_switch_tab_text_active: {
            fontSize: typography.fontSize.md,
            fontWeight: "800",
            color: colors.textSecondary,
        },

        mode_switch_tab_text_inactive: {
            fontSize: typography.fontSize.md,
            fontWeight: "800",
            color: colors.textSecondary,
        },

        mode_switch_tab_button: {
            flex: 1, 
            justifyContent: "center",
            alignItems: "center",
        }
    }
);

export default mode_switch_styles