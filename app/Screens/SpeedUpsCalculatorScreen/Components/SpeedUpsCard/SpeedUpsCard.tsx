import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import { maxItemsInBagValue, minutesInHour } from "../../../../../utills/consts";
import { IconPathConsts } from "../../../../../utills/enums";
import { Icon, IconButton, Surface } from "react-native-paper";
import speed_ups_card from "./SpeedUpsCard.styles";
import { typography } from "../../../../../utills/typography";
import { speedUpValueUserFriendlyVisualisation, timeConverterFromSecondsToStringInDaysHoursMinutesFormat } from "../../../../../utills/functions/userFriendlyVisualisation.functions";

type Props = {
    itemsCount: number,
    indexInArray: number,
    speedUpValueInMinutes: number,
    onCountChange: (itemsCount: number, indexInArray: number) => void,
}

function SpeedUpsCard({itemsCount, speedUpValueInMinutes, indexInArray, onCountChange}: Props): React.JSX.Element {
    const [cardSpeedUpsSummaryValue, setCardSpeedUpsSummaryValue] = useState<number>(speedUpValueInMinutes * itemsCount)
    
    useEffect(() => {
        setCardSpeedUpsSummaryValue(itemsCount * speedUpValueInMinutes)
    },[itemsCount])

    return(
        <Surface style = {speed_ups_card.wrapper} mode = "elevated">
           <View style = {speed_ups_card.first_row}>

                <Surface style = {speed_ups_card.time_badge} mode = "elevated">
                    <Text style = {speed_ups_card.text}> {speedUpValueUserFriendlyVisualisation(speedUpValueInMinutes)}</Text>
                </Surface>

                <Icon size = {30} source = {{uri: IconPathConsts.speedUpIcon}}/>
           </View>
           
           <View style = {speed_ups_card.second_row}>
                <Text style = {[speed_ups_card.text, {fontSize: typography.fontSize.value}]}>{itemsCount}</Text>
           </View>

           <View style = {speed_ups_card.third_row}>
                <IconButton icon = "minus" onPress = {() => {
                    onCountChange(itemsCount - 1, indexInArray)
                }}/>
                
                <NumericInput styles = {speed_ups_card.input} minValue = {0} maxValue = {maxItemsInBagValue} 
                    setParentElementState = {(state) => {onCountChange(state, indexInArray)}}/>

                <IconButton icon = "plus" onPress = {() => onCountChange(itemsCount + 1, indexInArray)}/>
           </View>

           <View style = {speed_ups_card.forth_row}>
                <Text style = {speed_ups_card.text}>
                    Subtotal:
                </Text>

                <Text style = {speed_ups_card.text}>
                    {timeConverterFromSecondsToStringInDaysHoursMinutesFormat(cardSpeedUpsSummaryValue * minutesInHour)}
                </Text>
           </View>
        </Surface>
    );
}

export default SpeedUpsCard