import React from 'react'
import { ImgPathConsts } from '../../../../../utills/enums'
import { jewel } from '../../../../../utills/types'
import { setGearImageBackgroundByRareness } from '../../../../../utills/functions/images.functions'
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import ImageInWrapper from '../../../../../Components/ImageInWrapper/ImageInWrapper'
import shared_styles from '../../../../../utills/sharedStyles.styles'
import jewel_styles from './Jewel.styles'

type Props = {
    jewel: jewel | undefined,
    onPress?: () => void
}

function Jewel({jewel, onPress}: Props): React.JSX.Element {

    const jewel_rareness_background_image_path = jewel ? setGearImageBackgroundByRareness(jewel.rareness)
        : ImgPathConsts.jewelsPlaceHolderImage

    return (
            <ImageBackground source = {{uri: jewel_rareness_background_image_path}} style = {shared_styles.img_in_view}>
                    <ImageInWrapper wrapperStyles = {jewel_styles.jewel_img_wrapper} 
                        imageSource = { ImgPathConsts.rootAssetsImgPath + jewel?.imagePath}
                        onPress = {onPress}/> 
            </ImageBackground>
    )
}

export default Jewel