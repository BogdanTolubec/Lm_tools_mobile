import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import training_calculator_styles from "./TrainingCalculatorScreenStyles"
import CalculationDataInputForm from "../Components/CalculationDataInputForm/CalculationDataInputForm";
import CalculationDataOutputForm from "../Components/CalculationDataOutputForm/CalculationDataOutputForm";
import { ImgPathConsts } from "../../../../utills/enums";
import shared_styles from "../../../../utills/sharedStyles.styles";
import { calculationResultsPlaceholder } from "../../../../utills/consts";
import ModeSwitch, { trainingCalculatorMode } from "../Components/ModeSwitch/ModeSwitch";
import { FullHeightScrollView } from "../../../../Components/ScrollView/ScrollView";
import SVGBackground from "../../../../Components/SVGBackground/SVGBackground";
import { resultCardsTypes } from "../../../../utills/functions/resourcesCalculationFunctions";

function TrainingCalculatorScreen(): React.JSX.Element {

    const [mode, setMode] = useState<trainingCalculatorMode>(trainingCalculatorMode.armyCount)
    const [calculationResults, setCalculationResults] = useState<Record<string, number>>(calculationResultsPlaceholder)

    const getCalculationResults = (calculationResults: Record<resultCardsTypes, number>) => {
        setCalculationResults(calculationResults)
    }

    const onModeChange = (mode: trainingCalculatorMode) => {
        setMode(mode)
    }

    return(
        <FullHeightScrollView>
            <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "stretch"  
                style = {shared_styles.background_img}>
                    <View style = {training_calculator_styles.wrapper}>
                        <ModeSwitch mode = {mode} onChange = {onModeChange}/>
                        
                        <View style = {training_calculator_styles.input_wrapper}>
                            <SVGBackground radius = {4}/>
                            <CalculationDataInputForm childToParent = {getCalculationResults} 
                                onModeChange = {onModeChange} 
                                mode = {mode}/>
                        </View>

                        <View style = {training_calculator_styles.output_wrapper}>
                            <CalculationDataOutputForm calculationResults = {calculationResults} mode = {mode}/>
                        </View>
                    </View>
            </ImageBackground>
        </FullHeightScrollView>
    );
}

export default TrainingCalculatorScreen