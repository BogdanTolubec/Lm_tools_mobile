import React, { useState } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import training_calculator_styles from "./TrainingCalculatorScreenStyles"
import CalculationDataInputForm from "../Components/CalculationDataInputForm/CalculationDataInputForm";
import CalculationDataOutputForm from "../Components/CalculationDataOutputForm/CalculationDataOutputForm";
import { ImgPathConsts } from "../../../../utills/enums";
import shared_styles from "../../../../utills/sharedStyles.styles";
import { SafeAreaView } from "react-native-safe-area-context";

function TrainingCalculatorScreen(): React.JSX.Element {

    const [calculationResults, setCalculationResults] = useState<Record<string, number>>({
        foodCount: 0,
        stoneCount: 0,
        woodCount: 0,
        oreCount: 0,
        goldCount: 0,
        trainingTime: 0,
    })

    const childToParent = (calculationResults: Record<string, number>) => {
        setCalculationResults(calculationResults)
    }

    return(
            <View style = {training_calculator_styles.wrapper}>
                <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover"  
                    style = {shared_styles.background_img}>
                        
                    <CalculationDataInputForm childToParent = {childToParent}/>
                    <CalculationDataOutputForm calculationResults = {calculationResults}/>

                </ImageBackground>
            </View>
    );
}

export default TrainingCalculatorScreen