import React, { useState } from "react";
import { View } from "react-native";
import ChooseRarenessLabels from "../ChooseRarenessLabels/ChooseRarenessLabels";
import JewelsOfPiece from "../JewelsOfPieceComponent/JewelsOfPieceComponent";
import { rareness } from "../../../../../utills/enums";
import { jewel } from "../../../../../utills/types";
import jewels_in_selected_piece_styles from "./JewelsInSelectedPieceComponent.styles";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import JewelComponent from "../JewelComponent/JewelComponent";

type Props = {
    currentSelectedjewel: jewel,
    selectedPieceJewels: (jewel | undefined)[],
    jewelsForCarousel: jewel[],
    onChooseRarenessLabelPressHandler: (rareness: rareness) => void,
    onJewelInPiecePressHandler: (jewel: (jewel | undefined)) => void,
    onJewelInCarouselPresshandler: (newJewelsInPiece: (jewel | undefined)[]) => void,
}

function JewelsInSelectedPiece(
    {
        currentSelectedjewel,
        selectedPieceJewels,
        jewelsForCarousel,
        onChooseRarenessLabelPressHandler,
        onJewelInPiecePressHandler,
        onJewelInCarouselPresshandler,
    }:Props){

    const [selectedJewelId, setSelectedJewelId] = useState<number>(0)

    return(
        <View style = {jewels_in_selected_piece_styles.wrapper}>
            <View style = {jewels_in_selected_piece_styles.jewels_wrapper}>
                <JewelComponent 
                    jewel = {selectedPieceJewels[0]}
                    onPress = { (jewel: jewel | undefined) => {
                        setSelectedJewelId(0)
                        onJewelInPiecePressHandler(jewel)
                        console.log(selectedJewelId)
                    }}
                />
                <JewelComponent 
                    jewel = {selectedPieceJewels[1]}
                    onPress = { (jewel: jewel | undefined) => {
                        setSelectedJewelId(1)
                        onJewelInPiecePressHandler(jewel)
                        console.log(selectedJewelId)
                    }}
                />
                <JewelComponent 
                    jewel = {selectedPieceJewels[2]}
                    onPress = { (jewel: jewel | undefined) => {
                        setSelectedJewelId(2)
                        onJewelInPiecePressHandler(jewel)
                        console.log(selectedJewelId)
                    }}
                />
            </View>

            <View style = {jewels_in_selected_piece_styles.jewels_in_carousel_wrapper}>
                <ItemsCarousel<jewel>
                    itemsArray = {jewelsForCarousel}
                >
                    { (item) => 
                        <View style = {{height: 90, width: 90}}>
                            <JewelComponent 
                                jewel = {item.item} 
                                onPress = {() => {
                                    selectedPieceJewels[selectedJewelId] = item.item
                                    onJewelInCarouselPresshandler(selectedPieceJewels)
                                }}/>
                        </View>
                    }
                </ItemsCarousel>
            </View>

            <View style = {jewels_in_selected_piece_styles.choose_rareness_labels_wrapper}>
                <ChooseRarenessLabels onChooseRarenessLabelPress = {onChooseRarenessLabelPressHandler}/>
            </View>
        </View>
    );
}

export default JewelsInSelectedPiece