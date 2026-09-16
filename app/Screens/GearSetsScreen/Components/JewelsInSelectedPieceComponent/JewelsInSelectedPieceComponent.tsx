import React, { useState } from "react";
import { View } from "react-native";
import ChooseRarenessLabels from "../ChooseRarenessLabels/ChooseRarenessLabels";
import { rareness } from "../../../../../utills/enums";
import { jewel } from "../../../../../utills/types";
import jewels_in_selected_piece_styles from "./JewelsInSelectedPieceComponent.styles";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import JewelComponent from "../JewelComponent/JewelComponent";
import { Surface } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import GoldFrame from "../../../../../Components/GoldFrame/GoldFrame";

type Props = {
    currentSelectedjewel: jewel,
    selectedPieceJewels: (jewel | undefined)[],
    jewelsForCarousel: jewel[],
    onChooseRarenessLabelPressHandler: (rareness: rareness) => void,
    onJewelInPiecePressHandler: (selectedJewel: (jewel | undefined)) => void,
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

    function selectedJewelFrame(jewelId: number | undefined):React.ReactNode{
        if(jewelId === selectedJewelId) return <GoldFrame radius = {5}/>
        else <></>
    }

    function Jewel(jewel: jewel | undefined, jewelInPieceArrayId: number): React.ReactNode {
        if(jewelInPieceArrayId > 2 || jewelInPieceArrayId < 0) return <></>

        return <JewelComponent 
                    jewel = {jewel}
                    onPress = { (jewel: jewel | undefined) => {
                        setSelectedJewelId(jewelInPieceArrayId)
                        onJewelInPiecePressHandler(jewel)
                    }}
                >
                    {selectedJewelFrame(jewelInPieceArrayId)}
                </JewelComponent>
    }

    return(
        <Surface style = {jewels_in_selected_piece_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]} 
                style = {jewels_in_selected_piece_styles.linearGradient}/>

                <View style = {jewels_in_selected_piece_styles.jewels_wrapper}>
                    {Jewel(selectedPieceJewels[0], 0)}
                    
                    {Jewel(selectedPieceJewels[1], 1)}

                    {Jewel(selectedPieceJewels[2], 2)}
                </View>

                <View style = {jewels_in_selected_piece_styles.jewels_in_carousel_wrapper}>
                    <ItemsCarousel<jewel>
                        itemsArray = {jewelsForCarousel}
                        containerStyle = {{flexGrow: 1}}
                    >
                        { (item) => 
                            <View style = {{height: 90, width: 90}}>
                                <JewelComponent 
                                    jewel = {item.item} 
                                    onPress = {(jewel: jewel | undefined) => {
                                        const newSelectedPieceJewels: (jewel | undefined)[] = [
                                            selectedPieceJewels[0],
                                            selectedPieceJewels[1],
                                            selectedPieceJewels[2],
                                        ]
                                        newSelectedPieceJewels[selectedJewelId] = jewel
                                        onJewelInCarouselPresshandler(newSelectedPieceJewels)
                                    }}>
                                        <GoldFrame radius = {10}/>
                                    </JewelComponent>
                            </View>
                        }
                    </ItemsCarousel>
                </View>

                <View style = {jewels_in_selected_piece_styles.choose_rareness_labels_wrapper}>
                    <ChooseRarenessLabels onChooseRarenessLabelPress = {onChooseRarenessLabelPressHandler}/>
                </View>
        </Surface>
    );
}

export default JewelsInSelectedPiece