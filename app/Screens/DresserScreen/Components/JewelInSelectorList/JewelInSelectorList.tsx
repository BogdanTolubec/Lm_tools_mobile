import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts} from "../../../../../utills/enums";
import { gearSet, jewel, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "../PieceInSelectorList/PieceInSelectorList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    gearSet: gearSet | undefined,
    selectedJewelInPieceId: number,
    listJewel: jewel | undefined,
    piece: Piece | undefined,
    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>,
    setJewelSelected: React.Dispatch<React.SetStateAction<jewel | undefined>>
}

function JewelInList({gearSet, listJewel, piece, selectedJewelInPieceId, setGearSet, setJewelSelected}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(listJewel?.rareness)


    function updatePiece(newJewel: jewel | undefined, piece: Piece | undefined): void {
        if(piece && newJewel && gearSet){
            let keyOfUpdatedGearSet: keyof typeof gearSet

            let updatedGearSet: gearSet = {...gearSet}
            let updatedPiece: Piece | undefined = {...piece}

            setJewelSelected(newJewel)

            if(updatedGearSet){
                updatedPiece.jewels[selectedJewelInPieceId] = newJewel

                for(keyOfUpdatedGearSet in updatedGearSet){    
                    if(keyOfUpdatedGearSet === piece.type && updatedGearSet[keyOfUpdatedGearSet] !== undefined){
                        updatedGearSet[keyOfUpdatedGearSet] = updatedPiece
                    }
                }
    
                setGearSet(updatedGearSet)
            }
        }
    }

    return(
        <View style = {piece_in_selector_list.wrapper}>
            <TouchableOpacity style = {piece_in_selector_list.first_row}>
                <View style = {piece_in_selector_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: item_rareness_background_image_path}} style = {piece_in_selector_list.rareness_background_img_wrapper}>
                        <ImageInWrapper wrapperStyles = {piece_in_selector_list.img_wrapper}
                            imageSource = { ImgPathConsts.rootAssetsImgPath + listJewel?.imagePath ||
                                ImgPathConsts.jewelsPlaceHolderImage} 
                                    onPress = {() => {updatePiece(listJewel, piece)}}/>
                    </ImageBackground>
                </View>

                <Text style = {shared_styles.stats_text}> {firstLetterCapitalizer(listJewel?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {listJewel?.stats}/>
        </View>
    );
}

export default JewelInList