import React, { useEffect, useState } from "react"
import { StyleProp, TextStyle } from "react-native"
import { TextInput } from "react-native-paper"
import { validateInputStringBySymbols } from "../../utills/functions/validation.functions"

type Props = {
    key?: React.Key,
    placeholder?: string,
    styles: StyleProp<TextStyle>, 
    setParentElementState: ((state: string) => void), 
    maxLength: number,
}

export default function TextInputForms({ key, placeholder, styles, setParentElementState, maxLength}: Props) {

    const[inputValue, setInputValue] = useState<string>("")
    
    useEffect(() => {
        setParentElementState(inputValue)
    },[inputValue])

  return (
    <TextInput key = {key} value = {inputValue} placeholder = {placeholder} maxLength = {maxLength} mode = "outlined"
      onChangeText = { (text: string) => {
            validateInputStringBySymbols(text, setInputValue)
      }
    } style = {styles}>
        
    </TextInput>
  )
}