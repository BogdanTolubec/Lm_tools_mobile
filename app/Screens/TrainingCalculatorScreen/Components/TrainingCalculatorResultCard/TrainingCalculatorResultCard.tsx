import React from "react"
import { View } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";
import { iconSizes } from "../../../../../utills/sharedStyles.styles";
import { firstLetterCapitalizer, numbersUpToTrillionReducer, timeConverterFromSecondsToStringInDaysHoursMinutesFormat } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { IconPathConsts } from "../../../../../utills/enums";
import training_calculator_result_card from "./TrainingCalculatorResultCard.styles";
import LinearGradient from "react-native-linear-gradient";
import { resultCardsTypes } from "../../../../../utills/functions/resourcesCalculationFunctions";

type Props = {
    resourceType: resultCardsTypes,
    calculatedResult: number,
}

function getIconByResourceType(resourceType: string | null): string {

    switch(resourceType){
        case resultCardsTypes.food: return IconPathConsts.foodIcon

        case resultCardsTypes.wood: return IconPathConsts.woodIcon

        case resultCardsTypes.stone: return IconPathConsts.stoneIcon

        case resultCardsTypes.ore: return IconPathConsts.oreIcon

        case resultCardsTypes.gold: return IconPathConsts.goldIcon

        case resultCardsTypes.trainingTime: return IconPathConsts.speedUpBadgeIcon

        case resultCardsTypes.armyCount: return IconPathConsts.armyIcon

        default: return IconPathConsts.foodIcon
    }
}

function TrainingCalculatorResultCard({resourceType, calculatedResult}:Props): React.JSX.Element {
    return(
        <Surface style = {training_calculator_result_card.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]}  
                style={training_calculator_result_card.linearGradient} />
            <Icon size = {iconSizes.lg} source = {{uri: getIconByResourceType(resourceType)}}/>
            <View style = {training_calculator_result_card.content_wrapper}>

                <Text style = {training_calculator_result_card.resource_type_text}>
                    {resourceType === resultCardsTypes.trainingTime ? "Time" : firstLetterCapitalizer(resourceType)}:
                </Text>

                <Text style = {training_calculator_result_card.calculated_data_text}>
                    {
                        resourceType === resultCardsTypes.trainingTime ? 
                        timeConverterFromSecondsToStringInDaysHoursMinutesFormat(calculatedResult) 
                        :
                        numbersUpToTrillionReducer(calculatedResult)
                    }
                </Text>
            </View>
        </Surface>
    ); 
}

export default TrainingCalculatorResultCard