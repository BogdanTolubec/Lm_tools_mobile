import React, { useCallback } from "react";
import { View } from "react-native";
import calculation_data_output_form from "./CalculationDataOutputForm.styles";
import TrainingCalculatorResultCard from "../TrainingCalculatorResultCard/TrainingCalculatorResultCard";
import { Text } from "react-native-paper";
import { trainingCalculatorMode } from "../ModeSwitch/ModeSwitch";
import { resultCardsTypes } from "../../../../../utills/functions/resourcesCalculationFunctions";

type Props = {
    calculationResults: Record<resultCardsTypes, number>, 
    mode: trainingCalculatorMode,
}

function CalculationDataOutputForm( {calculationResults, mode}: Props ): React.JSX.Element {
    const isArmyCountMode = mode === trainingCalculatorMode.armyCount

    return(
        <View style = {calculation_data_output_form.wrapper}>
            <Text style = {calculation_data_output_form.header_text}> Training report </Text>

            <View style = {calculation_data_output_form.calculation_data_wrapper}>
                <TrainingCalculatorResultCard resourceType = {resultCardsTypes.food} calculatedResult = {calculationResults.food}/>
                <TrainingCalculatorResultCard resourceType = {resultCardsTypes.wood} calculatedResult = {calculationResults.wood}/>
                <TrainingCalculatorResultCard resourceType = {resultCardsTypes.stone} calculatedResult = {calculationResults.stone}/>
                <TrainingCalculatorResultCard resourceType = {resultCardsTypes.ore} calculatedResult = {calculationResults.ore}/>
                <TrainingCalculatorResultCard resourceType = {resultCardsTypes.gold} calculatedResult = {calculationResults.gold}/>
                {
                    isArmyCountMode ?
                    <TrainingCalculatorResultCard 
                        resourceType = {resultCardsTypes.trainingTime} calculatedResult = {calculationResults.trainingTime}/>
                    :
                    <TrainingCalculatorResultCard 
                        resourceType = {resultCardsTypes.armyCount} calculatedResult = {calculationResults.armyCount}/>
                }
            </View>
        </View>
    );
}

export default CalculationDataOutputForm