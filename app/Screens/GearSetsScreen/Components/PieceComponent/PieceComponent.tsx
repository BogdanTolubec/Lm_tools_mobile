import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { IconPathConsts, ImgPathConsts } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import { jewel, Piece } from "../../../../../utills/types";
import shared_styles from "../../../../../utills/sharedStyles.styles";
import GoldFrame from "../../../../../Components/GoldFrame/GoldFrame";
import piece_component_styles from "./PieceComponent.styles";
import JewelComponent from "../JewelComponent/JewelComponent";

type Props = {
    piece: Piece | undefined,
    onPress?: () => void,
    jewels?: Array<jewel | undefined> | null
}

function PieceComponent({piece, jewels, onPress}: Props): React.JSX.Element {

    const piece_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)
    
    return(
        <View style = {piece_component_styles.wrapper}>
            <GoldFrame radius = {19}/>

            <Pressable onPress = {onPress} style = {piece_component_styles.wrapper}>

            <ImageBackground source = {{uri: piece_rareness_background_image_path}} 
                style = {piece_component_styles.rareness_background_img}
                imageStyle = {{borderRadius: 15}}>

                <View style = {piece_component_styles.piece_img_wrapper}>
                    <ImageBackground style = {piece_component_styles.piece_img}
                        imageStyle = {shared_styles.img_in_view}
                        source = {{uri: ImgPathConsts.rootAssetsImgPath + piece?.imagePath}}>
                        
                        {
                            (piece?.tempernessLevel && piece?.tempernessLevel >= 1) ?
                                <View style = {piece_component_styles.temperStarIconWrapper}>
                                    <ImageBackground source = {{uri: IconPathConsts.temperedIcon}} 
                                    style = {shared_styles.img_in_view}
                                    imageStyle = {shared_styles.img_in_view}>
                                        <Text style = {piece_component_styles.tempernessLevelText}> {piece.tempernessLevel} </Text>
                                    </ImageBackground>
                                </View> 
                                :
                                <></>
                        }

                    </ImageBackground>

                        {   
                            jewels ?

                            <View style = {piece_component_styles.jewels_wrapper}>
                                <View style = {piece_component_styles.jewels_in_piece_wrapper}>
                                    {   
                                        jewels.map((jewel, index) => 
                                        {
                                            return(
                                                <View key = {index} style = {piece_component_styles.jewel_in_piece_wrapper}>
                                                    <JewelComponent jewel = {jewel}/>
                                                </View>
                                            )
                                        }  
                                        )
                                    }
                                </View>
                            </View> 
                            
                            :

                            <></>
                        }
                </View>
            </ImageBackground>
        </Pressable>
        </View>
    );
}

export default PieceComponent