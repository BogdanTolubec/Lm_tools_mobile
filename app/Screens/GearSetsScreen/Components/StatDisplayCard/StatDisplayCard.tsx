import React from "react";
import { statsTypes } from "../../../../../utills/enums";
import { Surface, Text } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import stat_display_card_styles from "./StatDisplayCard.styles";

type Props = {
    statText: statsTypes,
    statValue: number | null
}

function StatDisplayCard({statText, statValue}: Props): React.JSX.Element {
    return(
        <Surface style = {stat_display_card_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]} 
                style = {stat_display_card_styles.linearGradient}/>
            <Text style = {stat_display_card_styles.text}> {statText}:</Text> 
            <Text style = {stat_display_card_styles.text}> {statValue}% </Text>
        </Surface>
    );
}

export default StatDisplayCard