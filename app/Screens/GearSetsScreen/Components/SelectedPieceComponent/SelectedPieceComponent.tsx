import React, { useEffect, useState } from "react";
import { Piece } from "../../../../../utills/types";
import { ActivityIndicator, Surface, Text } from "react-native-paper";
import PieceComponent from "../PieceComponent/PieceComponent";
import selected_piece_styles from "./SelectedPieceComponent.styles";
import LinearGradient from "react-native-linear-gradient";
import { View } from "react-native";
import ItemsCarousel from "../ItemsCarousel/ItemsCarousel";
import Slider from "@react-native-community/slider";
import { tempernessStatsAddByLevels } from "../../../../../utills/consts";
import { rareness } from "../../../../../utills/enums";

type Props = {
    selectedPiece: Piece,
    allPiecesArray: Array<Piece>,
    isPiecesLoading: boolean,
    onPieceInCarouselPress: (piece: Piece) => void,
}

function SelectedPieceComponent({selectedPiece, allPiecesArray, isPiecesLoading, onPieceInCarouselPress}: Props): React.JSX.Element {

    const [pieceInComponent, setPieceInComponent] = useState<Piece>(selectedPiece)

    useEffect(() => {
        setPieceInComponent(selectedPiece)
    }, [selectedPiece])

    return(
        <Surface style = {selected_piece_styles.wrapper}>
            <LinearGradient colors = {["#1b3453", "#254166", "#1b3453"]} 
                style = {selected_piece_styles.linearGradient}/>
            {
                isPiecesLoading ?
                <ActivityIndicator animating = {true}/>
                :
                <View style = {{flex: 1}}>
                    <View style = {selected_piece_styles.selected_piece_wrapper}>
                        <PieceComponent piece = {pieceInComponent}/>
                    </View>

                    <View style = {selected_piece_styles.slider}>
                        <Text style = {selected_piece_styles.temperness_level_text}> {pieceInComponent.tempernessLevel || 0} </Text>
                        <Slider 
                            style = {{flex: 1}}
                            minimumValue = {1}
                            maximumValue = {tempernessStatsAddByLevels.length}
                            step = {1}
                            disabled = {
                                selectedPiece?.rareness == rareness.common || 
                                selectedPiece?.rareness == rareness.uncommon ||
                                selectedPiece?.rareness == rareness.rare ||
                                selectedPiece?.rareness == rareness.epic ||
                                selectedPiece?.rareness == rareness.legendary
                            }
                            onValueChange = {(value) => {
                                setPieceInComponent({...pieceInComponent, tempernessLevel: value})
                            }}
                    />
                    </View>

                    <View style = {selected_piece_styles.carousel}>
                        <ItemsCarousel<Piece> itemsArray = {allPiecesArray}  containerStyle = {{flex: 1}}>
                            {({item}) => 
                            <View style = {{height: 80, width: 80}}>
                                <PieceComponent piece = {item} onPress = {() => onPieceInCarouselPress(item)}/>
                            </View>}
                        </ItemsCarousel>                    
                    </View>
                </View>
            }
        </Surface>
    );
}

export default SelectedPieceComponent