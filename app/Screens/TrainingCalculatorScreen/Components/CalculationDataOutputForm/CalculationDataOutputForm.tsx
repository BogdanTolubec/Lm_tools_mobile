import React from "react";
import { Text, View } from "react-native";
import calculation_data_output_form from "./CalculationDataOutputForm.styles";
import { firstLetterCapitalizer, timeConverterFromSecondsToStringInDaysHoursMinutesFormat, userFriendlyBigNumbersVisualisation } from "../../../../../utills/functions/userFriendlyVisualisation.functions";

type Props = {
    calculationResults: Record<string, number>
}

function CalculationDataOutputForm( {calculationResults}: Props ): React.JSX.Element {

    let keyOfCalculationResults: keyof typeof calculationResults

    const calculatedMaterialsOutput = (): React.JSX.Element[] => {
        const resultsArray: React.JSX.Element[] = []

        for(keyOfCalculationResults in calculationResults){
            resultsArray.push(
                <View key = {keyOfCalculationResults} style = {calculation_data_output_form.rss_output}>
                    <Text style = {calculation_data_output_form.text}> 
                        {firstLetterCapitalizer(keyOfCalculationResults)}: 
                        
                        {
                            keyOfCalculationResults === "trainingTime" ? 
                            timeConverterFromSecondsToStringInDaysHoursMinutesFormat(calculationResults[keyOfCalculationResults])
                            : 
                            userFriendlyBigNumbersVisualisation(calculationResults[keyOfCalculationResults])
                        }
                    </Text>
                </View>
            )
        }

        return resultsArray
    }

    return(
        <View style = {calculation_data_output_form.wrapper}>
            {calculatedMaterialsOutput()}
        </View>
    );
}

export default CalculationDataOutputForm