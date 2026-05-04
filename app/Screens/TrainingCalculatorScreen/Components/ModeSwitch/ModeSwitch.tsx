import React from "react";
import { Pressable, View } from "react-native";
import mode_switch_styles from "./ModeSwitch.styles";
import { Surface, Text } from "react-native-paper";
import GoldFrame from "../../../../../Components/GoldFrame/GoldFrame";

export enum trainingCalculatorMode {
    armyCount = "armyCount",
    speedUpsCount = "speedUpsCount",
}

type Props = {
    mode: trainingCalculatorMode,
    onChange: (mode: trainingCalculatorMode) => void
}

function ModeSwitch({mode, onChange}: Props): React.JSX.Element {

    const isArmyCountMode = mode === trainingCalculatorMode.armyCount

    return(
        <View style = {mode_switch_styles.wrapper}>
            <Surface style = {[mode_switch_styles.mode_switch_tab, isArmyCountMode ? 
                mode_switch_styles.mode_switch_tab_active : mode_switch_styles.mode_switch_tab_inactive]}>
                
                {isArmyCountMode ? <GoldFrame radius = {15}/> : <></>}
                <Pressable onPress = {() => {onChange(trainingCalculatorMode.armyCount)}}
                    style = {mode_switch_styles.mode_switch_tab_button}>
                    <Text style = {mode_switch_styles.mode_switch_tab_text}> By troops count </Text>
                </Pressable>

            </Surface>

            <Surface style = {[mode_switch_styles.mode_switch_tab, mode === trainingCalculatorMode.speedUpsCount ? 
                mode_switch_styles.mode_switch_tab_active : mode_switch_styles.mode_switch_tab_inactive]}>

                {isArmyCountMode ? <></> : <GoldFrame radius = {15}/>}
                <Pressable onPress = {() => {onChange(trainingCalculatorMode.speedUpsCount)}} 
                    style = {mode_switch_styles.mode_switch_tab_button}>
                    <Text style = {mode_switch_styles.mode_switch_tab_text}> By speed ups count </Text>
                </Pressable>
            </Surface>
        </View>
    );
}

export default ModeSwitch