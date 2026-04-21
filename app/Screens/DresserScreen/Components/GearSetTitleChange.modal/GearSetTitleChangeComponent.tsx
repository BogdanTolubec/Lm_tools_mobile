import React, { useState } from "react"
import { Text, TextInput, View } from "react-native";
import SubmitButton from "../../../../../Components/SubmitButton/SubmitButton";
import { gearSet } from "../../../../../utills/types";
import gear_set_title_change_component from "./GearSetTitleChangeComponent.styles";
import { validateInputStringBySymbols } from "../../../../../utills/functions/validation.functions";

type Props = {
    gearSet: gearSet,
    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>
}

function GearSetTitleChangeComponent({gearSet, setGearSet}: Props): React.JSX.Element {

    const [newTitle, setNewTitle] = useState<string>("")

    const onChangeTitle = (newTitle: string): void => {
        let updatedGearSet: gearSet = {
            ...gearSet,
            title: newTitle,
        }

        setGearSet(updatedGearSet)
        setNewTitle("")
    }

    return(
        <View style = {gear_set_title_change_component.wrapper}>
            <Text style = {gear_set_title_change_component.modal_title}> Change title </Text>

            <TextInput value = {newTitle} onChangeText = {(text) => {
                validateInputStringBySymbols(text, setNewTitle)
            }} style = {gear_set_title_change_component.input} maxLength = {10}/>

            <View style = {gear_set_title_change_component.button_wrapper}>
                <SubmitButton title = "Submit" onPress = {() => {onChangeTitle(newTitle)}}/>
            </View>
        </View>
    );
}

export default GearSetTitleChangeComponent