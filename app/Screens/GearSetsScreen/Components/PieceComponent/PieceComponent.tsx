import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { IconPathConsts, ImgPathConsts, pieceTypesClient, pieceTypesDb } from "../../../../../utills/enums";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import { jewel, PieceInSet, RawPiece } from "../../../../../utills/types";
import shared_styles from "../../../../../utills/styles/sharedStyles.styles";
import GoldFrame from "../../../../../Components/GoldFrame/GoldFrame";
import piece_component_styles from "./PieceComponent.styles";
import JewelsOfPiece from "../JewelsOfPieceComponent/JewelsOfPieceComponent";
import { choosePieceImageByType } from "../../../../../utills/functions/utils.functions";

type Props = {
    piece: PieceInSet | undefined,
    pieceType: pieceTypesClient,
    onPress?: () => void,
    jewels?: (jewel | undefined)[],
}

function PieceComponent({piece, jewels, pieceType, onPress}: Props): React.JSX.Element {

    const piece_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)
    
    return(
        <View style = {piece_component_styles.wrapper}>
            <GoldFrame radius = {10}/>

            <Pressable onPress = {onPress} style = {piece_component_styles.wrapper}>

            <ImageBackground source = {{uri: piece_rareness_background_image_path}} 
                style = {piece_component_styles.rareness_background_img}
                imageStyle = {{borderRadius: 10}}>

                <View style = {piece_component_styles.piece_img_wrapper}>
                    <ImageBackground style = {piece_component_styles.piece_img}
                        imageStyle = {shared_styles.img_in_view}
                        source = {{uri: (piece ? 
                            ImgPathConsts.rootAssetsImgPath + piece.imagePath 
                            : 
                            choosePieceImageByType(pieceType))}}>
                        
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
                            piece && jewels ?
                            <View style = {piece_component_styles.jewels_in_piece_wrapper}>
                                <JewelsOfPiece jewels = {jewels}/>
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