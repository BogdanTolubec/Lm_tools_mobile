import React from "react";
import { Alert, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { ImgPathConsts, pieceTypes} from "../../../../../utills/enums";
import { gearSet, Piece } from "../../../../../utills/types";
import StatsList from "../StatsList/StatsList";
import { firstLetterCapitalizer } from "../../../../../utills/functions/userFriendlyVisualisation.functions";
import { setGearImageBackgroundByRareness } from "../../../../../utills/functions/images.functions";
import ImageInWrapper from "../../../../../Components/ImageInWrapper/ImageInWrapper";
import piece_in_selector_list from "./PieceInSelectorList.styles";
import shared_styles from "../../../../../utills/sharedStyles.styles";

type Props = {
    piece: Piece | undefined,
    pieceType: pieceTypes | undefined,

    gearSet: gearSet | undefined,
    onPress: (selectedPiece: Piece | undefined) => void,

    setGearSet: React.Dispatch<React.SetStateAction<gearSet>>
}

function PieceInList({piece, pieceType, gearSet, onPress, setGearSet}: Props): React.JSX.Element {

    let item_rareness_background_image_path = setGearImageBackgroundByRareness(piece?.rareness)

    function updateGearSet(piece: Piece | undefined, pieceType: pieceTypes | undefined): void { //pieceType isimportant! because of accesories re-render issue!
        if(gearSet && piece){
            let keyOfUpdatedGearSet: keyof typeof gearSet
            let updatedGearSet: gearSet = {
                ...gearSet
            }

            for(keyOfUpdatedGearSet in updatedGearSet){
                if(pieceType === keyOfUpdatedGearSet){
                    piece.jewels = updatedGearSet[keyOfUpdatedGearSet]?.jewels || [undefined, undefined, undefined] // not null operator because of check before
                    updatedGearSet[keyOfUpdatedGearSet] = piece
                    setGearSet(updatedGearSet)
                }
            }
        }
    }

    return(
        <View style = {piece_in_selector_list.wrapper}>
            <TouchableOpacity style = {piece_in_selector_list.first_row}>
                <View style = {piece_in_selector_list.rareness_background_img_wrapper}>
                    <ImageBackground  source = {{uri: item_rareness_background_image_path}} style = {piece_in_selector_list.rareness_background_img_wrapper}>
                        <ImageInWrapper wrapperStyles = {piece_in_selector_list.img_wrapper}
                            imageSource = { ImgPathConsts.rootAssetsImgPath + piece?.imagePath ||
                                ImgPathConsts.jewelsPlaceHolderImage} onPress = {() => {
                                        updateGearSet(piece, pieceType)
                                        onPress(piece)
                                    }}/>
                    </ImageBackground>
                </View>

                <Text style = {shared_styles.stats_text}> {firstLetterCapitalizer(piece?.name || "")} </Text>
            </TouchableOpacity>

            <StatsList statsToShow = {piece?.stats}/>
        </View>
    );
}

export default PieceInList