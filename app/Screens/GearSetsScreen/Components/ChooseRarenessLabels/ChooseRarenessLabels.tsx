import React from "react";
import { View } from "react-native";
import choose_rareness_labels_styles from "./ChooseRarenessLabels.styles";
import { IconPathConsts, rareness } from "../../../../../utills/enums";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";

type Props = {
    onChooseRarenessLabelPress: (rareness: rareness) => void
}

function ChooseRarenessLabels({
        onChooseRarenessLabelPress
    }: Props): React.JSX.Element{
    return(
        <View style = {choose_rareness_labels_styles.wrapper}>
            <ImageInWrapper imageSource = {IconPathConsts.commonChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.common)}/>

            <ImageInWrapper imageSource = {IconPathConsts.uncommonChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.uncommon)}/>

            <ImageInWrapper imageSource = {IconPathConsts.rareChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.rare)}/>

            <ImageInWrapper imageSource = {IconPathConsts.epicChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.epic)}/>
            
            <ImageInWrapper imageSource = {IconPathConsts.legendaryChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.legendary)}/>

            <ImageInWrapper imageSource = {IconPathConsts.mythicChooseLableIcon} 
                wrapperStyles = {choose_rareness_labels_styles.image_wrapper}
                onPress = {() => onChooseRarenessLabelPress(rareness.mythic)}/>
        </View>
    );
}

export default ChooseRarenessLabels