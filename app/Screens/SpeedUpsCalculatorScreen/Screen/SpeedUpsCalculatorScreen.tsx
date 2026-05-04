import React, { useCallback, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import SpeedUpsCard from "../Components/SpeedUpsCard/SpeedUpsCard";
import { IconPathConsts, ImgPathConsts } from "../../../../utills/enums";
import { maxItemsInBagValue, speedUpsValuesArray } from "../../../../utills/consts";
import speed_ups_calculator_screen from "./SpeedUpsCalculatorScreen.styles";
import { timeConverterFromSecondsToStringInDaysHoursMinutesFormat } from "../../../../utills/functions/userFriendlyVisualisation.functions";
import shared_styles, { iconSizes } from "../../../../utills/sharedStyles.styles";
import { minutesToSeconds } from "../../../../utills/functions/timeConvertFunctions";
import { FullHeightScrollView } from "../../../../Components/ScrollView/ScrollView";
import { Icon } from "react-native-paper";
import GoldFrame from "../../../../Components/GoldFrame/GoldFrame";
import SVGBackground from "../../../../Components/SVGBackground/SVGBackground"

function SpeedUpsCalculatorScreen(): React.JSX.Element{

    const initialArray: number[] = []
    
    speedUpsValuesArray.forEach(() => {
        initialArray.push(0)
    })
    const [itemCountsByCardArray, setItemCountsByCardArray] = useState<number[]>(initialArray)

    const onItemsCountChange = useCallback((itemsCount: number, indexInArray: number) => {
        if(itemsCount < 0) return
        if(Number(itemsCount) > maxItemsInBagValue) return

        setItemCountsByCardArray(previousArray => {
            const nextArray = [...previousArray]
            nextArray[indexInArray] = itemsCount
            return nextArray
        })
    }, [])

    return(
            <View style = {speed_ups_calculator_screen.wrapper}>
                <ImageBackground source = {{uri: ImgPathConsts.backgroundImage}} resizeMode = "cover" 
                    style = {[shared_styles.background_img, {paddingTop: 35}]}>
                        
                    <View style = {speed_ups_calculator_screen.results_wrapper}>

                        <SVGBackground radius = {10}/>
                        <GoldFrame radius = {12}/>

                        <Icon size = {iconSizes.xxxl} source = {{uri: IconPathConsts.hourglassIcon}}/>

                        <View>

                            <Text style = {speed_ups_calculator_screen.summary_label_text}> 
                                Total speedup time:
                            </Text>

                            <Text style = {speed_ups_calculator_screen.total_time_text}> 
                                {
                                    timeConverterFromSecondsToStringInDaysHoursMinutesFormat(
                                        minutesToSeconds(itemCountsByCardArray.reduce((sum, count, index) => {
                                        return sum + Number(count) * speedUpsValuesArray[index];
                                        }, 0)
                                    )
                                )}
                            </Text>

                        </View>
                    </View>

                    <FullHeightScrollView showsVerticalScrollIndicator = {false}>    
                        <View style = {speed_ups_calculator_screen.inputs_wrapper}>
                                {
                                    speedUpsValuesArray.map((speedUpValue, index) =>
                                            <View key = {index} style = {speed_ups_calculator_screen.input_wrapper}>
                                                <SpeedUpsCard itemsCount = {itemCountsByCardArray[index]}
                                                    indexInArray = {index}
                                                    speedUpValueInMinutes = {speedUpValue}
                                                    onCountChange = {onItemsCountChange}/>
                                            </View>
                                    )
                                }
                        </View>
                    </FullHeightScrollView>
                    
                </ImageBackground>
            </View>
    );
}

export default SpeedUpsCalculatorScreen