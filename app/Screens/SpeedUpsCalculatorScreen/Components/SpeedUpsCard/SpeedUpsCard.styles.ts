import React from "react";
import { StyleSheet } from "react-native";
import { typography } from "../../../../../utills/typography";
import { colors } from "../../../../../utills/sharedStyles.styles";

const speed_ups_card = StyleSheet.create({
    wrapper:{
        flex: 1,

        alignItems: "center",

        borderRadius: 15,

        backgroundColor: "#112033",

        borderWidth: 1,
        borderColor: colors.borderSoft,

        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 14,
        marginBottom: 5,
    },

    items_count_wrapper: {
        flex: 1,
        
        width: "100%",
        alignItems: "center",
        margin: 5,
    },

    first_row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
    },

    second_row: {
        flex: 1,
        flexDirection: "row",

        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        
        gap: 5,
        margin: 5,
    },

    third_row: {
        flex: 1,
        flexDirection: "row",

        width: "100%",

        borderTopWidth: 1,
        borderTopColor: colors.borderSoft,

        justifyContent: "space-between",
        margin: 5,
        paddingTop: 5,
    },

    subtotal_and_icon: {
        flex: 1,
        flexDirection: "row",
        gap: 5,

        alignItems: "center",
    },

    time_badge: {
        minWidth: 50,

        alignItems: "center",
        justifyContent: "center",

        padding: 2,
        borderRadius: 9,
        borderWidth: 1.5,

        paddingHorizontal: 14,

        backgroundColor: "#264670",
        borderColor: colors.borderSoft,
    },
    
    input: {
        maxHeight: 30,

        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    buttons_wrapper: {
        height: 40,
        width: 50,
    },  

    text: {
        fontSize: typography.fontSize.md,
        color: "#F3F1EA",
        fontWeight: "700",
        fontFamily: typography.fontFamily.regular,
    },
})

export default speed_ups_card