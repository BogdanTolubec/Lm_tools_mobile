import React from "react"
import { ImgPathConsts } from "../../../../../utills/enums"
import { jewel } from "../../../../../utills/types"
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions"
import { ImageBackground, View } from "react-native"
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper"
import shared_styles from "../../../../../utills/sharedStyles.styles"
import jewel_component_styles from "./JewelComponent.styles.ts"

type Props = {
    jewel: jewel | undefined,
    onPress?: () => void
}

function JewelComponent({jewel, onPress}: Props): React.JSX.Element {

    const jewel_rareness_background_image_path = jewel ? setGearImageBackgroundByRareness(jewel.rareness)
        : ImgPathConsts.jewelsPlaceHolderImage

    return (
        <View style = {{flex: 1}}>
            {   jewel ?
                <ImageBackground source = {{uri: jewel_rareness_background_image_path}} 
                    style = {shared_styles.img_in_view}
                    imageStyle = {{borderRadius: 5}}>
                    <ImageInWrapper wrapperStyles = {jewel_component_styles.wrapper} 
                        imageSource = { ImgPathConsts.rootAssetsImgPath + jewel?.imagePath}
                        onPress = {onPress}/>
                </ImageBackground>

                :

                <View style = {jewel_component_styles.wrapper}>
                    <ImageBackground source = {{uri: ImgPathConsts.jewelsPlaceHolderImage}} 
                        style = {shared_styles.img_in_view}/>
                </View>
            }
        </View>
    )
}

export default JewelComponent