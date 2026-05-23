import React from "react";
import { stats } from "../../../../../utills/types";
import { Surface, Text } from "react-native-paper";
import { View } from "react-native";
import stats_component_styles from "./StatsComponent.styles";
import { statsTypes } from "../../../../../utills/enums";
import SVGBackground from "../../../../../Components/SVGBackground/SVGBackground";
import { LinearGradient } from "react-native-linear-gradient";
import StatDisplayCard from "../StatDisplayCard/StatDisplayCard";

type Props = {
    statsToDisplay: stats,
}

function StatsComponent({statsToDisplay}:Props): React.JSX.Element {
    return(
        <Surface style = {stats_component_styles.wrapper} elevation = {2}>
            <SVGBackground radius = {5}/>
            <View style = {stats_component_styles.stats_column}>

                <StatDisplayCard statText = {statsTypes.armyAtk} statValue = {statsToDisplay.armyAtk}/>
                <StatDisplayCard statText = {statsTypes.infantryAtk} statValue = {statsToDisplay.infantryAtk}/>
                <StatDisplayCard statText = {statsTypes.rangedAtk} statValue = {statsToDisplay.rangedAtk}/>
                <StatDisplayCard statText = {statsTypes.cavalryAtk} statValue = {statsToDisplay.cavalryAtk}/>

            </View>

            <View style = {stats_component_styles.stats_column}>

                <StatDisplayCard statText = {statsTypes.armyHp} statValue = {statsToDisplay.armyHp}/>
                <StatDisplayCard statText = {statsTypes.infantryHp} statValue = {statsToDisplay.infantryHp}/>
                <StatDisplayCard statText = {statsTypes.rangedHp} statValue = {statsToDisplay.rangedHp}/>
                <StatDisplayCard statText = {statsTypes.cavalryHp} statValue = {statsToDisplay.cavalryHp}/>
                
            </View>

            <View style = {stats_component_styles.stats_column}>
                <StatDisplayCard statText = {statsTypes.armyDeff} statValue = {statsToDisplay.armyDeff}/>
                <StatDisplayCard statText = {statsTypes.infantryDeff} statValue = {statsToDisplay.infantryDeff}/>
                <StatDisplayCard statText = {statsTypes.rangedDeff} statValue = {statsToDisplay.rangedDeff}/>
                <StatDisplayCard statText = {statsTypes.cavalryDeff} statValue = {statsToDisplay.cavalryDeff}/>
            </View>
        </Surface>
    );
}

export default StatsComponent