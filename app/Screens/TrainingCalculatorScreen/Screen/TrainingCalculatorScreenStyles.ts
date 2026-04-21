import React from 'react';
import {StyleSheet} from 'react-native';

const training_calculator_styles = StyleSheet.create(
    {
        wrapper: {
            minHeight: "100%",
            width: "100%",
            padding: 3,

            display: "flex",
            flexDirection: "column",

            justifyContent: "space-between",
            
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },

        scrollViewStyles:{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
            width:"100%",
        },
    }
);

export default training_calculator_styles