import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import { maxItemsInBagValue, minutesInHour } from "../../../../../utills/consts";
import { IconPathConsts } from "../../../../../utills/enums";
import { Icon, Surface } from "react-native-paper";
import speed_ups_card from "./SpeedUpsCard.styles";
import { typography } from "../../../../../utills/typography";
import { numbersUpToTrillionReducer, speedUpValueUserFriendlyVisualisation, timeConverterFromSecondsToStringInDaysHoursMinutesFormat } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import ElevatedButton from "../../../../../Components/ElevatedButton/ElevatedButton";
import { colors, iconSizes } from "../../../../../utills/sharedStyles.styles";

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

                <Surface style = {speed_ups_card.time_badge} elevation = {5}>
                    <Text style = {speed_ups_card.text}> {speedUpValueUserFriendlyVisualisation(speedUpValueInMinutes)}</Text>
                </Surface>

                <Icon size = {iconSizes.xl} source = {{uri: IconPathConsts.speedUpBadgeIcon}}/>
           </View>

           <View style = {speed_ups_card.second_row}>

                <View style = {speed_ups_card.items_count_wrapper}>
                    <Text style = {[speed_ups_card.text, {fontSize: typography.fontSize.value}]}>
                        {numbersUpToTrillionReducer(itemsCount)}
                    </Text>
                </View>

                <View style = {speed_ups_card.buttons_wrapper}>
                    <ElevatedButton isIcon = {true} iconSize = {17} iconPath = {IconPathConsts.minusIcon} 
                        colors = {["#264670", "#35619c", "#264670"]}
                        onPress = {() => {
                            onCountChange(itemsCount - 1, indexInArray)
                    }}/>
                </View>
                
                <NumericInput styles = {[speed_ups_card.input, {borderColor: colors.borderViolet}]} minValue = {0} maxValue = {maxItemsInBagValue} 
                    setParentElementState = {(state) => {onCountChange(state, indexInArray)}}/>

                <View style = {speed_ups_card.buttons_wrapper}>
                    <ElevatedButton isIcon = {true} iconSize = {17} iconPath = {IconPathConsts.plusIcon} 
                        colors = {["#264670", "#35619c", "#264670"]}
                        onPress = {() => {
                            onCountChange(itemsCount + 1, indexInArray)}}/>
                </View>
           </View>

           <View style = {speed_ups_card.third_row}>
                <View style = {speed_ups_card.subtotal_and_icon}>
                    <Icon size = {iconSizes.sm} source = "clock" color = {"#264670"}/>

                    <Text style = {speed_ups_card.text}>
                        Subtotal:
                    </Text>
                </View>

                <Text style = {speed_ups_card.text}>
                    {timeConverterFromSecondsToStringInDaysHoursMinutesFormat(cardSpeedUpsSummaryValue * minutesInHour)}
                </Text>
           </View>
        </Surface>
    );
}

export default SpeedUpsCard