import React from 'react'
import { Text, TouchableHighlight } from 'react-native'
import check_label from './CheckLabel.styles'
import { armyTiers, armyTypes } from '../../../../../utills/enums'

type Props = {
    onPress: (text: armyTypes | armyTiers, itemId: number) => void,
    text: armyTypes | armyTiers,
    itemId: number,
    selectedId: number,
}

function CheckLabel( { text, itemId, selectedId, onPress}: Props): React.JSX.Element {

    const onFocusColor: string = "rgb(45, 77, 200)"
    const onFocusEndColor: string = "rgb(35, 67, 88)"

    return(
    <TouchableHighlight style = {
        [ check_label.wrapper, itemId === selectedId ? {backgroundColor: onFocusColor} : {backgroundColor: onFocusEndColor} ]
    }

        onPress = {() => {
            onPress(text, itemId)
        }}>
        <Text style = {check_label.text}> {text} </Text>
    </TouchableHighlight>
    )
}

export default CheckLabel