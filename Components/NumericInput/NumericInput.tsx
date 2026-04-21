import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { TextInput } from "react-native-paper"
import { validateInputTypeNumber } from "../../utills/functions/validation.functions";

type Props = {
    minValue: number, 
    maxValue: number,
    placeholder?: string | undefined, 
    styles: StyleProp<ViewStyle>,
    setParentElementState: ((state: number) => void), 
    maxLength?: number | undefined
}

function NumericInput({minValue, maxValue, placeholder, styles, setParentElementState, maxLength}: Props): React.JSX.Element {

    const[inputValue, setInputValue] = useState<string>("")

    return(
        <TextInput value = {inputValue} keyboardType = "numeric" style = {styles} 
            maxLength = {maxLength ?? maxValue.toString().length} 
            onChangeText={(text) => {
            
            validateInputTypeNumber(text, minValue, maxValue, (validatedValue) => {
                setInputValue(validatedValue);
                setParentElementState(validatedValue === "" ? minValue : Number(validatedValue));
            });
        }
        } placeholder = {placeholder} mode = "outlined"/>
    );
}

export default NumericInput