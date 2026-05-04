import React from "react";
import { Text, Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import elevated_button from "./ElevatedButton.styles";
import { Icon } from "react-native-paper";

type Props = {
    key?: React.Key,
    onPress: (() => void) | undefined,
    title?: string,
    colors: (string | number)[],
    isIcon?: boolean,
    iconPath?: string,
    iconSize?: number
}

function ElevatedButton( {key, onPress, title, colors, isIcon, iconPath, iconSize = 30}: Props ): React.JSX.Element {

    return(
        <Pressable key = {key} onPress = {onPress} style = {{flex: 1}}>
            <LinearGradient  colors = {colors}
                start = {{ x: 0.5, y: 0 }}
                end = {{ x: 0.5, y: 1 }}
                style = {elevated_button.wrapper}>
                {
                    isIcon ?
                    <View style = {{height: iconSize, width: iconSize, alignSelf: "center"}}>
                        <Icon size = {iconSize} source = {{uri: iconPath}}></Icon>
                    </View>
                    :
                    <Text style = {elevated_button.text}> {title} </Text>
                }
            </LinearGradient>
        </Pressable>
    );
}

export default ElevatedButton