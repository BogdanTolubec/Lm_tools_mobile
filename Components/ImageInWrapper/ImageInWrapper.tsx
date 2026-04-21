import React from "react";
import { Image, StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import shared_styles from "../../utills/sharedStyles.styles";

type Props = {
    imageSource: string | undefined,
    wrapperStyles: StyleProp<ViewStyle>,
    onPress?: () => void
}

function ImageInWrapper({imageSource, wrapperStyles, onPress}: Props): React.JSX.Element {
    return(
        <TouchableOpacity style = {wrapperStyles} onPress = {onPress}>
            <Image style = {shared_styles.img_in_view} source = {{uri: imageSource}}/>
        </TouchableOpacity>
    );
}

export default ImageInWrapper