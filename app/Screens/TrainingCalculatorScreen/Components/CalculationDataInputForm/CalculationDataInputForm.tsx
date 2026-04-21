import React, { useState } from "react";
import { Alert, Text,  View } from "react-native";
import calculation_data_input_form from "./CalculationDataInputForm.styles";
import CheckLabel from "../CheckLabel/CheckLabel";
import { calculationDataT1, calculationDataT2, calculationDataT3, calculationDataT4 } from "../../../../../utills/consts";
import NumericInput from "../../../../../Components/NumericInput/NumericInput";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { armyTiers, armyTypes } from "../../../../../utills/enums";
import { calculationData } from "../../../../../utills/types";

type Props = {childToParent: (calculationResults: Record<string, number>) => void}

function CalculationDataInputForm( { childToParent }: Props): React.JSX.Element {

    //constants
    const calculationResults: Record<string, number> = {
        foodCount: 0,
        stoneCount: 0,
        woodCount: 0,
        oreCount: 0,
        goldCount: 0,
        trainingTime: 0,
    }

    const armyTypeLabelsInfo = [{ id: 1, text: armyTypes.infantry}, { id: 2, text: armyTypes.ranged},
    { id: 3, text: armyTypes.cavalry}, { id:4, text: armyTypes.siege}]

    const tierLabelsInfo = [{ id: 1, text: armyTiers.tier1}, { id: 2, text: armyTiers.tier2},
    { id: 3, text: armyTiers.tier3}, { id:4, text: armyTiers.tier4}]

    const [armyCount, setArmyCount] = useState<number>(0)
    const [trainingSpeed, setTrainingSpeed] = useState<number>(0)
    const [subsidy, setSubsidy] = useState<number>(0)

    const[currentArmyTypeSelect, setCurrentArmyTypeSelect] = useState<armyTypes>(armyTypes.infantry)
    const[currentTierSelect, setCurrentTierSelect] = useState<armyTiers>(armyTiers.tier1)

    const[selectedArmyTypeId, setSelectedArmyTypeId] = useState<number>(0)
    const[selectedTierId, setSelectedTierId] = useState<number>(0)

    //functions
    function onCheckLabelClick(text: armyTypes | armyTiers, itemId: number): void {
        if(Object.values(armyTypes).includes(text as armyTypes)){
            setCurrentArmyTypeSelect(text as armyTypes)
            setSelectedArmyTypeId(itemId)
        }

        if(Object.values(armyTiers).includes(text as armyTiers)){
            setCurrentTierSelect(text as armyTiers)
            setSelectedTierId(itemId)}
    }

    const setMaterialsCount = (calculationDataArmyTypeRss: Array<number>, trainingTime: number) => {
        
        calculationResults.foodCount = armyCount * (calculationDataArmyTypeRss[0] * (1 - subsidy / 100))
        calculationResults.stoneCount = armyCount * (calculationDataArmyTypeRss[1] * (1 - subsidy / 100))
        calculationResults.woodCount = armyCount * (calculationDataArmyTypeRss[2] * (1 - subsidy / 100))
        calculationResults.oreCount = armyCount * (calculationDataArmyTypeRss[3] * (1 - subsidy / 100))
        calculationResults.goldCount = armyCount * (calculationDataArmyTypeRss[4] * (1 - subsidy / 100))

        calculationResults.trainingTime = (armyCount * trainingTime) / (1 + trainingSpeed / 100)
    }

    const calculateMaterials = () => {

        if(!currentArmyTypeSelect || !currentTierSelect){
            return Alert.alert("Set up all values before calculating!")
        }

        const tier = currentTierSelect.replaceAll(" ", "") // important! delete all " " from text
        const armyType = currentArmyTypeSelect.replaceAll(" ", "")
        let calculationData: calculationData

        switch (tier){
            case "t1": {calculationData = calculationDataT1; break}
            case "t2": {calculationData = calculationDataT2; break}
            case "t3": {calculationData = calculationDataT3; break}
            case "t4": {calculationData = calculationDataT4; break}
            default: calculationData = calculationDataT1
        }

        switch (armyType){
            case armyTypes.infantry: {setMaterialsCount(calculationData.infantryRss, calculationData.secondsTrainingSpeed); break}
            case armyTypes.ranged: {setMaterialsCount(calculationData.rangedRss, calculationData.secondsTrainingSpeed); break}
            case armyTypes.cavalry: {setMaterialsCount(calculationData.cavalryRss, calculationData.secondsTrainingSpeed); break}
            case armyTypes.siege: {setMaterialsCount(calculationData.siegeRss, calculationData.secondsTrainingSpeed); break}
            default: setMaterialsCount(calculationData.infantryRss, calculationData.secondsTrainingSpeed)
        }
    }

    const calculateAndSendData = () => {
        calculateMaterials()
        childToParent(calculationResults)
    }
    
    return(
        <View style = {calculation_data_input_form.wrapper}>

            <View style = {calculation_data_input_form.check_labels_wrapper}>
                <View style = {calculation_data_input_form.select_section}>

                    {armyTypeLabelsInfo.map((label, index) => 
                        <View key = {index} style = {calculation_data_input_form.check_label_wrapper}>
                            <CheckLabel  itemId = {label.id} text = {label.text} selectedId = {selectedArmyTypeId}
                            onPress = {onCheckLabelClick}/>
                        </View>
                    )}

                </View>

                <View style = {calculation_data_input_form.select_section}>

                    {tierLabelsInfo.map((label, index) => 
                        <View key = {index} style = {calculation_data_input_form.check_label_wrapper}>
                            <CheckLabel  key = {index} itemId = {label.id} text = {label.text} selectedId = {selectedTierId}
                            onPress = {onCheckLabelClick}/>
                        </View>
                    )}

                </View>
            </View>

            <View style = {calculation_data_input_form.inputs_wrapper}>
                <Text style = {calculation_data_input_form.text_input_labels}>Training speed (%): </Text>
                <NumericInput placeholder = "100" styles = {calculation_data_input_form.text_input}
                minValue = {0} maxValue = {999} setParentElementState = {(state) => {setTrainingSpeed(state)}}/>

                <Text style = {calculation_data_input_form.text_input_labels}> Army count: </Text>
                <NumericInput placeholder = "100.000" styles = {calculation_data_input_form.text_input} 
                minValue = {0} maxValue = {999_999_999} setParentElementState = {(state) => {setArmyCount(state)}}/>

                <Text style = {calculation_data_input_form.text_input_labels}> Subsidy (%): </Text>
                <NumericInput placeholder = "40" styles = {calculation_data_input_form.text_input}
                minValue = {0} maxValue = {40} maxLength = {3} setParentElementState = {(state) => {setSubsidy(state)}}/>
            </View>

            <View style = {calculation_data_input_form.button_wrapper}>
                <SubmitButton onPress = {() => {calculateAndSendData()}} title = "Calculate"/>
            </View>
        </View>
    );
}

export default CalculationDataInputForm