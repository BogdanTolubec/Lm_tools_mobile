import React from "react";
import {StyleSheet} from "react-native";
import { colors } from "../../../../utills/sharedStyles.styles";

const training_calculator_styles = StyleSheet.create(
    {
        wrapper: {
            flex: 1,

            alignContent: "center",

            padding: 5,
            gap: 20,
        },

        input_wrapper:{
            width: "100%",

            borderRadius: 24,
            padding: 12,
            borderWidth: 1,
            borderColor: colors.borderSoft,
            marginBottom: 18,
        },

        output_wrapper: {
            minWidth: "95%",
        },
    }
);

export default training_calculator_styles