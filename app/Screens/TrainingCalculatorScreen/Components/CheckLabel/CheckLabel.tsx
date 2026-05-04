import React from "react"
import { Image, Pressable, Text, TouchableHighlight, View } from "react-native"
import check_label from "./CheckLabel.styles"
import { armyTiers, armyTypes } from "../../../../../utills/enums"
import { colors } from "../../../../../utills/sharedStyles.styles"
import check_label_styles from "./CheckLabel.styles"
import { Icon } from "react-native-paper"
import LinearGradient from "react-native-linear-gradient"
import GoldFrame from "../../../../../Components/GoldFrame/GoldFrame"

type Props = {
    onPress: (text: armyTypes | armyTiers, itemId: number) => void,
    text: armyTypes | armyTiers,
    itemId: number,
    selectedId: number,
    iconUri?: string, 
}

function CheckLabel( { text, itemId, selectedId, iconUri, onPress}: Props): React.JSX.Element {

    const isActive = selectedId === itemId ? true : false

    return(
        <Pressable onPress = { () => onPress(text, itemId)} style = {check_label_styles.selectTileWrap}>
            <View style = {[check_label_styles.selectTile, isActive && check_label_styles.selectTileActive]}>
                <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]}  
                    style = {isActive ? check_label_styles.selectTileGradient : undefined} />
                    {isActive ? <GoldFrame radius = {iconUri ? 28 : 35}/> : <></>}
                    {
                        iconUri ?
                        <Image source = {{uri: iconUri}} style = {{height: 20, width: 20}}/>
                        :
                        <></>
                    }
                    <Text style={[check_label_styles.selectTileText, isActive && check_label_styles.selectTileTextActive]}>
                        {text}
                    </Text>
            </View>
        </Pressable>
    )
}

export default CheckLabel